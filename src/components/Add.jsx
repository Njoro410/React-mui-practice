import { Box, Fab, Modal } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
import { styled } from "@mui/system";


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
})
 
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="whitesmoke" p={3}>
          Hello
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
