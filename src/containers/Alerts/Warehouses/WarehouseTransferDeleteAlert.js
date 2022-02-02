import React from 'react';
import intl from 'react-intl-universal';
import { FormattedMessage as T, FormattedHTMLMessage } from 'components';
import { Intent, Alert } from '@blueprintjs/core';
import { AppToaster } from 'components';
import { useDeleteWarehouseTransfer } from 'hooks/query';

import withAlertStoreConnect from 'containers/Alert/withAlertStoreConnect';
import withAlertActions from 'containers/Alert/withAlertActions';

import { compose } from 'utils';

/**
 * Warehouse transfer delete alert
 * @returns
 */
function WarehouseTransferDeleteAlert({
  name,

  // #withAlertStoreConnect
  isOpen,
  payload: { warehouseTransferId },

  // #withAlertActions
  closeAlert,
}) {
  const { mutateAsync: deleteWarehouseTransferMutate, isLoading } =
  useDeleteWarehouseTransfer();

  // handle cancel delete warehouse alert.
  const handleCancelDeleteAlert = () => {
    closeAlert(name);
  };

  // handleConfirm delete warehouse transfer.
  const handleConfirmWarehouseTransferDelete = () => {
    deleteWarehouseTransferMutate(warehouseTransferId)
      .then(() => {
        AppToaster.show({
          message: intl.get('warehouse_transfer.alert.delete_message'),
          intent: Intent.SUCCESS,
        });
      })
      .catch(
        ({
          response: {
            data: { errors },
          },
        }) => {},
      )
      .finally(() => {
        closeAlert(name);
      });
  };

  return (
    <Alert
      cancelButtonText={<T id={'cancel'} />}
      confirmButtonText={<T id={'delete'} />}
      icon="trash"
      intent={Intent.DANGER}
      isOpen={isOpen}
      onCancel={handleCancelDeleteAlert}
      onConfirm={handleConfirmWarehouseTransferDelete}
      loading={isLoading}
    >
      <p>
        <FormattedHTMLMessage
          id={'warehouse_transfer.once_delete_this_warehouse_transfer'}
        />
      </p>
    </Alert>
  );
}

export default compose(
  withAlertStoreConnect(),
  withAlertActions,
)(WarehouseTransferDeleteAlert);
