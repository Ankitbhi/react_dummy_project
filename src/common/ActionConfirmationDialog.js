import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function ActionConfirmationDialog(props) {
  const {
    open,
    setOpen,
    onContinueClick,
    isDelete = false,
    actionHeader,
    warningText,
  } = props;
  const { t } = useTranslation();

  return (
    <Dialog maxWidth="sm" open={open} fullWidth>
      <DialogTitle id="alert-dialog-title">{t(actionHeader)}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {t(warningText)}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color={"secondary"}
          onClick={() => setOpen(false)}
        >
          {t("COMMON_CANCEL")}
        </Button>
        <Button onClick={onContinueClick}>
          {isDelete ? t("COMMON_YES_DELETE") : t("COMMON_YES_LOGOUT")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ActionConfirmationDialog;
