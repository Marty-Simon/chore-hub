/**
 * Household Members Screen - Manage household members and invitations
 */

import { useState } from 'react';
import { View, Text, Card, Button, TextInput, Badge, IconButton, Dialog } from '@idealyst/components';
import type { IconName } from '@idealyst/components';
import { trpc } from '../utils/trpc';
import { useNavigator } from '@idealyst/navigation';

// TODO: Replace with actual household ID from auth context
const CURRENT_HOUSEHOLD_ID = 'temp-household-id';
const CURRENT_USER_ID = 'temp-user-id';

interface InviteFormData {
  name: string;
  phoneNumber: string;
}

export default function HouseholdMembers() {
  const navigation = useNavigator();
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteForm, setInviteForm] = useState<InviteFormData>({
    name: '',
    phoneNumber: '',
  });

  // Fetch household members
  const { data: members, isLoading: loadingMembers, refetch: refetchMembers } = 
    trpc.user.listByHousehold.useQuery({ householdId: CURRENT_HOUSEHOLD_ID });

  // Fetch pending invitations
  const { data: invitations, isLoading: loadingInvitations, refetch: refetchInvitations } = 
    trpc.invitation.listByHousehold.useQuery({ householdId: CURRENT_HOUSEHOLD_ID });

  // Mutations
  const createInvitation = trpc.invitation.create.useMutation({
    onSuccess: () => {
      refetchInvitations();
      setShowInviteModal(false);
      setInviteForm({ name: '', phoneNumber: '' });
    },
  });

  const deleteInvitation = trpc.invitation.delete.useMutation({
    onSuccess: () => {
      refetchInvitations();
    },
  });

  const resendInvitation = trpc.invitation.resend.useMutation({
    onSuccess: () => {
      refetchInvitations();
    },
  });

  const removeMember = trpc.user.delete.useMutation({
    onSuccess: () => {
      refetchMembers();
    },
  });

  const handleSendInvite = () => {
    if (!inviteForm.phoneNumber) {
      return;
    }

    createInvitation.mutate({
      householdId: CURRENT_HOUSEHOLD_ID,
      inviterId: CURRENT_USER_ID,
      phoneNumber: inviteForm.phoneNumber,
      name: inviteForm.name || undefined,
    });
  };

  const getStatusIcon = (status: string): IconName => {
    switch (status) {
      case 'PENDING':
        return 'clock';
      case 'ACCEPTED':
        return 'check-circle';
      case 'DECLINED':
        return 'close-circle';
      case 'EXPIRED':
        return 'alert-circle';
      default:
        return 'help-circle';
    }
  };

  const getStatusIntent = (status: string): 'primary' | 'success' | 'danger' | 'warning' | 'neutral' => {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'ACCEPTED':
        return 'success';
      case 'DECLINED':
      case 'EXPIRED':
        return 'danger';
      default:
        return 'neutral';
    }
  };

  const getRoleIcon = (role: string): IconName => {
    switch (role) {
      case 'ADMIN':
        return 'shield-account';
      case 'CHILD':
        return 'baby-face';
      case 'MEMBER':
      default:
        return 'account';
    }
  };

  const isLoading = loadingMembers || loadingInvitations;

  return (
    <View scrollable>
      <View padding="lg" gap="lg">
        {/* Header with Back Button */}
        <View gap="md">
          <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="md">
            <IconButton
              icon="arrow-left"
              intent="neutral"
              type="text"
              onPress={() => navigation.goBack()}
            />
            <Text typography="h4" weight="bold">
              Household Members
            </Text>
          </View>
          <Text typography="body2" color="secondary">
            Manage who has access to this household
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Button
              type="contained"
              intent="primary"
              leftIcon="account-plus"
              onPress={() => setShowInviteModal(true)}
            >
              Invite Member
            </Button>
          </View>
        </View>

        {isLoading ? (
          <View padding="lg">
            <Text typography="body1" color="secondary">
              Loading...
            </Text>
          </View>
        ) : (
          <>
            {/* Current Members */}
            <View gap="md">
              <Text typography="h6" weight="semibold">
                Current Members ({members?.length || 0})
              </Text>
              {members?.map((member: any) => (
                <Card key={member.id} padding="md" type="outlined">
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }} gap="md">
                      <View
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 24,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        background="primary"
                      >
                        <Text typography="h6" color="inverse">
                          {member.name.charAt(0).toUpperCase()}
                        </Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
                          <Text typography="subtitle1" weight="semibold">
                            {member.name}
                          </Text>
                          <Badge type="filled" intent="neutral" size="sm">
                            {member.role}
                          </Badge>
                        </View>
                        <Text typography="body2" color="secondary">
                          {member.email}
                        </Text>
                        {member.phone && (
                          <Text typography="caption" color="secondary">
                            {member.phone}
                          </Text>
                        )}
                      </View>
                    </View>
                    <IconButton
                      icon="delete"
                      intent="danger"
                      type="text"
                      onPress={() => {
                        if (confirm(`Remove ${member.name} from household?`)) {
                          removeMember.mutate({ id: member.id });
                        }
                      }}
                    />
                  </View>
                </Card>
              ))}
            </View>

            {/* Pending Invitations */}
            {invitations && invitations.length > 0 && (
              <View gap="md">
                <Text typography="h6" weight="semibold">
                  Pending Invitations ({invitations.filter((i: any) => i.status === 'PENDING').length})
                </Text>
                {invitations.map((invitation: any) => (
                  <Card key={invitation.id} padding="md" type="outlined">
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                      <View style={{ flex: 1 }} gap="xs">
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
                          <Text typography="subtitle1" weight="semibold">
                            {invitation.name || 'Unnamed Invitee'}
                          </Text>
                          <Badge
                            type="filled"
                            intent={getStatusIntent(invitation.status)}
                            size="sm"
                          >
                            {invitation.status}
                          </Badge>
                        </View>
                        <Text typography="body2" color="secondary">
                          {invitation.phoneNumber}
                        </Text>
                        <Text typography="caption" color="secondary">
                          Invited by {invitation.inviter.name} • Expires{' '}
                          {new Date(invitation.expiresAt).toLocaleDateString()}
                        </Text>
                        {invitation.status === 'PENDING' && (
                          <Text typography="caption" color="secondary">
                            Invitation link: {window.location.origin}/invite/{invitation.token}
                          </Text>
                        )}
                      </View>
                      <View style={{ flexDirection: 'row' }} gap="sm">
                        {invitation.status === 'PENDING' && (
                          <IconButton
                            icon="send"
                            intent="primary"
                            type="outlined"
                            size="sm"
                            onPress={() => resendInvitation.mutate({ invitationId: invitation.id })}
                          />
                        )}
                        <IconButton
                          icon="delete"
                          intent="danger"
                          type="text"
                          size="sm"
                          onPress={() => {
                            if (confirm('Delete this invitation?')) {
                              deleteInvitation.mutate({ invitationId: invitation.id });
                            }
                          }}
                        />
                      </View>
                    </View>
                  </Card>
                ))}
              </View>
            )}
          </>
        )}

        {/* Info Card */}
        <Card padding="md" background="primary">
          <View gap="sm">
            <View style={{ flexDirection: 'row', alignItems: 'center' }} gap="sm">
              <Text typography="subtitle1" weight="semibold" color="inverse">
                💡 How Invitations Work
              </Text>
            </View>
            <Text typography="body2" color="inverse">
              When you invite someone, they receive a text message with a link to join your household.
              They can accept or decline the invitation. Once accepted, they'll have access to view and
              manage chores in this household.
            </Text>
          </View>
        </Card>
      </View>

      {/* Invite Dialog */}
      <Dialog
        open={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        title="Invite Household Member"
      >
        <View gap="md" padding="md">
          <TextInput
            label="Name (Optional)"
            placeholder="Enter name"
            value={inviteForm.name}
            onChangeText={(text) => setInviteForm({ ...inviteForm, name: text })}
            leftIcon="account"
          />
          <TextInput
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            value={inviteForm.phoneNumber}
            onChangeText={(text) => setInviteForm({ ...inviteForm, phoneNumber: text })}
            leftIcon="cellphone"
            inputMode="number"
            textContentType="telephoneNumber"
          />
          <Text typography="caption" color="secondary">
            An invitation link will be generated. In a production app, this would send an SMS to the
            phone number.
          </Text>
          <View style={{ flexDirection: 'row' }} gap="md">
            <Button
              type="outlined"
              intent="neutral"
              onPress={() => setShowInviteModal(false)}
              style={{ flex: 1 }}
            >
              Cancel
            </Button>
            <Button
              type="contained"
              intent="primary"
              leftIcon="send"
              onPress={handleSendInvite}
              disabled={!inviteForm.phoneNumber || createInvitation.isPending}
              loading={createInvitation.isPending}
              style={{ flex: 1 }}
            >
              Send Invite
            </Button>
          </View>
        </View>
      </Dialog>
    </View>
  );
}
