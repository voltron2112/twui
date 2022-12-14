import React, { createContext, useContext } from "react";
import { ButtonProps, IconButtonProps } from "@/components";

export type ButtonGroupState = {
  buttonGroupButtonTheme?: Omit<ButtonProps, "children">;
  buttonGroupIconButtonTheme?: Omit<IconButtonProps, "children">;
};

const defaultButtonGroupState: ButtonGroupState = {};

export const ButtonGroupContext = createContext<ButtonGroupState>(
  defaultButtonGroupState
);

export const ButtonGroupProvider = ({
  value = defaultButtonGroupState,
  children,
}: {
  value?: ButtonGroupState;
  children: React.ReactNode;
}) => {
  return (
    <ButtonGroupContext.Provider value={value}>
      {children}
    </ButtonGroupContext.Provider>
  );
};

export const useButtonGroup = () => useContext(ButtonGroupContext);
