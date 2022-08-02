import { FC, forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import styled from 'styled-components';
import { colors, zIndexes } from 'styles';
import { colorConverter } from 'utils';

const StyledRoot = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const StyledOverlay = styled.div`
  background-color: ${colorConverter.hexToRgba(colors.darkGrey, 0.6)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndexes.modalBackdrop};
`;

const StyledContent = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  width: 800px;
  transform: translateX(-50%);
  height: 50%;
  z-index: ${zIndexes.modal};
`;

interface IModal {
  children: ReactNode;
}

export interface IModalType {
  open: () => void;
}

export const Modal = forwardRef<IModalType, IModal>((props, ref) => {
  const { children } = props;

  const [isOpen, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTrigger = () => setOpen((state) => !state);

  useImperativeHandle(ref, () => ({
    open() {
      handleOpen();
    }
  }));

  return (
    <StyledRoot>
      <StyledOverlay onClick={handleTrigger} />
      <StyledContent>{children}</StyledContent>
    </StyledRoot>
  );
});
