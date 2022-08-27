import {
  InputControlTheme,
  IconButtonTheme,
  ButtonGroupTheme,
  ButtonTheme,
  AdornmentTheme,
  AccordionTheme,
  InputTheme,
  FieldErrorTheme,
  LabelTheme,
} from "@/components";

export type Theme = {
  Label?: LabelTheme;
  FieldError?: FieldErrorTheme;
  Accordion?: AccordionTheme;
  Adornment?: AdornmentTheme;
  Button?: ButtonTheme;
  IconButton?: IconButtonTheme;
  Input?: InputTheme;
  InputControl?: InputControlTheme;
  ButtonGroup?: ButtonGroupTheme;
};
