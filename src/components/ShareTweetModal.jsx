import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, List, ListItem, ListItemText, ListItemIcon, IconButton } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import ShareIcon from '@mui/icons-material/Share';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';

const ShareTweetModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs">
      {/* Título del modal con botón de cierre */}
      <DialogTitle className="flex justify-between items-center">
        <span className="font-bold text-lg">Compartir Tweet</span>
        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Opciones de compartir */}
      <DialogContent>
        <List>
          <ListItem button onClick={() => {
            navigator.clipboard.writeText("URL_DEL_TWEET");
            onClose();
          }}>
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="Copiar vínculo" />
          </ListItem>

          <ListItem button onClick={() => {
            // Lógica para compartir en otras plataformas
            onClose();
          }}>
            <ListItemIcon>
              <ShareIcon />
            </ListItemIcon>
            <ListItemText primary="Compartir post a través de..." />
          </ListItem>

          <ListItem button onClick={() => {
            // Lógica para compartir por mensaje directo
            onClose();
          }}>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Enviar por Mensaje Directo" />
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default ShareTweetModal;
