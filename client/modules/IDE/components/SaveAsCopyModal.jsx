import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Button, ButtonKinds } from '../../../common/Button';
import { closeSaveAsCopyModal } from '../actions/ide';
import { cloneProject } from '../actions/project';
import Modal from './Modal';

const SaveAsCopyModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeSaveAsCopyModal());
  const handleConfirm = () => {
    dispatch(closeSaveAsCopyModal());
    dispatch(cloneProject());
  };

  return (
    <Modal
      title={t('Nav.File.SaveAsCopyTitle')}
      closeAriaLabel={t('Nav.File.SaveAsCopyCloseARIA')}
      onClose={handleClose}
    >
      <p>{t('Nav.File.SaveAsCopyConfirm')}</p>
      <div className="modal__actions">
        <Button onClick={handleClose}>{t('Nav.File.SaveAsCopyCancel')}</Button>
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <Button kind={ButtonKinds.SECONDARY} onClick={handleConfirm} autoFocus>
          {t('Nav.File.SaveAsCopyButton')}
        </Button>
      </div>
    </Modal>
  );
};

export default SaveAsCopyModal;
