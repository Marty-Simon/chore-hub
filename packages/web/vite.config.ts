import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'vite-plugin-babel';
import path from 'path';

// Monorepo root (where hoisted node_modules live)
const monorepoRoot = path.resolve(__dirname, '../..');

export default defineConfig({
  // WARNING: Disables WebSocket origin validation - only safe in isolated dev containers
  legacy: {
    skipWebSocketTokenCheck: true,
  },
  plugins: [
    {
      name: 'idealyst-preview-bridge',
      transformIndexHtml(html) {
        var __bridgeScript = "(function(){\n'use strict';\ntry{\nif(window.__idealystBridge)return;\nwindow.__idealystBridge=true;\nvar MAX_CONSOLE=50,MAX_NETWORK=30,MAX_MSG=2000;\nvar consoleLogs=[],networkRequests=[];\nvar oc={log:console.log,warn:console.warn,error:console.error,info:console.info};\nfunction fmt(a){var p=[];for(var i=0;i<a.length;i++){try{if(typeof a[i]==='string')p.push(a[i]);else if(a[i] instanceof Error)p.push(a[i].message+(a[i].stack?'\\n'+a[i].stack:''));else p.push(JSON.stringify(a[i]));}catch(e){p.push(String(a[i]));}}var m=p.join(' ');return m.length>MAX_MSG?m.substring(0,MAX_MSG)+'...':m;}\nfunction wc(level){console[level]=function(){oc[level].apply(console,arguments);var entry={level:level,message:fmt(arguments),timestamp:Date.now()};consoleLogs.push(entry);if(consoleLogs.length>MAX_CONSOLE)consoleLogs.shift();try{window.parent.postMessage({type:'PREVIEW_CONSOLE_LOG',entry:entry},'*');}catch(e){}};}\nwc('log');wc('warn');wc('error');wc('info');\nwindow.addEventListener('error',function(ev){var entry={level:'error',message:(ev.message||'Unknown error')+(ev.filename?' at '+ev.filename+':'+ev.lineno+':'+ev.colno:''),timestamp:Date.now()};consoleLogs.push(entry);if(consoleLogs.length>MAX_CONSOLE)consoleLogs.shift();try{window.parent.postMessage({type:'PREVIEW_CONSOLE_LOG',entry:entry},'*');}catch(e){}});\nwindow.addEventListener('unhandledrejection',function(ev){var r=ev.reason;var m='Unhandled Promise Rejection: ';if(r instanceof Error)m+=r.message+(r.stack?'\\n'+r.stack:'');else{try{m+=JSON.stringify(r);}catch(e){m+=String(r);}}if(m.length>MAX_MSG)m=m.substring(0,MAX_MSG)+'...';var entry={level:'error',message:m,timestamp:Date.now()};consoleLogs.push(entry);if(consoleLogs.length>MAX_CONSOLE)consoleLogs.shift();try{window.parent.postMessage({type:'PREVIEW_CONSOLE_LOG',entry:entry},'*');}catch(e){}});\nvar of=window.fetch;\nwindow.fetch=function(input,init){var method=(init&&init.method)?init.method.toUpperCase():'GET';var url=typeof input==='string'?input:(input&&input.url?input.url:String(input));var st=Date.now();var entry={method:method,url:url.length>500?url.substring(0,500)+'...':url,status:null,duration:null,type:'fetch',timestamp:st};return of.apply(this,arguments).then(function(resp){entry.status=resp.status;entry.duration=Date.now()-st;networkRequests.push(entry);if(networkRequests.length>MAX_NETWORK)networkRequests.shift();try{window.parent.postMessage({type:'PREVIEW_NETWORK_REQUEST',entry:entry},'*');}catch(e){}return resp;}).catch(function(err){entry.status=0;entry.duration=Date.now()-st;networkRequests.push(entry);if(networkRequests.length>MAX_NETWORK)networkRequests.shift();try{window.parent.postMessage({type:'PREVIEW_NETWORK_REQUEST',entry:entry},'*');}catch(e){}throw err;});};\nvar oxo=XMLHttpRequest.prototype.open,oxs=XMLHttpRequest.prototype.send;\nXMLHttpRequest.prototype.open=function(method,url){this.__ib={method:method?method.toUpperCase():'GET',url:(typeof url==='string'&&url.length>500)?url.substring(0,500)+'...':String(url),startTime:null};return oxo.apply(this,arguments);};\nXMLHttpRequest.prototype.send=function(){if(this.__ib){this.__ib.startTime=Date.now();var meta=this.__ib,xhr=this;xhr.addEventListener('loadend',function(){var entry={method:meta.method,url:meta.url,status:xhr.status||null,duration:meta.startTime?Date.now()-meta.startTime:null,type:'xhr',timestamp:meta.startTime||Date.now()};networkRequests.push(entry);if(networkRequests.length>MAX_NETWORK)networkRequests.shift();try{window.parent.postMessage({type:'PREVIEW_NETWORK_REQUEST',entry:entry},'*');}catch(e){}});}return oxs.apply(this,arguments);};\nwindow.addEventListener('message',function(ev){if(ev.data&&ev.data.type==='PREVIEW_CONTEXT_REQUEST'){try{ev.source.postMessage({type:'PREVIEW_CONTEXT_RESPONSE',data:{consoleLogs:consoleLogs.slice(),networkRequests:networkRequests.slice(),currentUrl:window.location.href,capturedAt:Date.now()}},'*');}catch(e){}}});\ntry{window.parent.postMessage({type:'PREVIEW_BRIDGE_READY'},'*');}catch(e){}\n}catch(e){}\n})();";
        return html.replace('</body>', '<script>' + __bridgeScript + '</script></body>');
      },
    },
    babel({
      filter: (id) =>
        id.includes('node_modules/@idealyst/') ||
        (id.includes('/packages/') && /\.(tsx?|jsx?)$/.test(id)),
      babelConfig: {
        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }],
          ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
        ],
        plugins: [
          // 0. Config plugin - injects env vars at build time
          ['@idealyst/config/plugin', {
            extends: ['../shared/.env'],
          }],
          // 1. Idealyst theme plugin - processes $iterator patterns FIRST
          [
            '@idealyst/theme/plugin',
            {
              autoProcessPaths: [
                'packages/',
                '@idealyst/components',
                '@idealyst/navigation',
                '@idealyst/theme',
              ],
              themePath: '../shared/src/theme.ts',
            },
          ],
          // 2. Unistyles plugin - processes StyleSheet.create SECOND
          [
            'react-native-unistyles/plugin',
            {
              root: 'src',
              autoProcessPaths: [
                'packages/',
                '@idealyst/components',
                '@idealyst/navigation',
                '@idealyst/theme',
              ],
            },
          ],
          // 3. Idealyst components web plugin
          ['@idealyst/components/plugin/web', { root: 'src' }],
        ],
      },
    }),
    react(),
  ],
  resolve: {
    alias: {
      'react-native': path.resolve(monorepoRoot, 'node_modules/react-native-web'),
      'react-native-unistyles': path.resolve(monorepoRoot, 'node_modules/react-native-unistyles'),
      '@react-native/normalize-colors': path.resolve(monorepoRoot, 'node_modules/@react-native/normalize-colors'),
      '@mdi/react': path.resolve(monorepoRoot, 'node_modules/@mdi/react'),
      '@mdi/js': path.resolve(monorepoRoot, 'node_modules/@mdi/js'),
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js', '.jsx'],
    conditions: ['browser', 'import', 'module', 'default'],
    preserveSymlinks: false,
  },
  define: {
    global: 'globalThis',
    __DEV__: JSON.stringify(true),
  },
  server: {
    strictPort: true,
    hmr: {
      host: 'web-cmm0n1iae0015u9cdudn46vka-cmm0n1iam0017u9cdqash75ff.proxy.idealyst.io',
      clientPort: 443,
      protocol: 'wss',
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
    allowedHosts: true,
    host: '0.0.0.0',
    port: 5173,
  },
  optimizeDeps: {
    include: [
      'react-native-web',
      '@react-native/normalize-colors',
    ],
    exclude: [
      '@chore-hub/shared',
    ],
    esbuildOptions: {
      resolveExtensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.jsx', '.js'],
      loader: {
        '.tsx': 'tsx',
        '.ts': 'ts',
      },
    },
  },
});
