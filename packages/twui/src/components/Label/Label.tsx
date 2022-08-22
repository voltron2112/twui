import { HTMLProps, ReactNode, useMemo } from "react";
import { useTheme } from "../../theme";
import { Size, SXClass } from "../../types";
import { getDataAttributes, tw } from "../../utils";

export type LabelSX = {
  root?: SXClass;
  label?: SXClass;
  required?: SXClass;
  description?: SXClass;
};

export interface LabelVariants {
  default: true;
}

export type LabelProps = Omit<HTMLProps<HTMLLabelElement>, "size"> & {
  variant?: keyof LabelVariants;
  children?: ReactNode;
  description?: ReactNode;
  classes?: LabelSX;
  required?: boolean;
  size?: Size;
};

export const Label: React.FC<LabelProps> = ({
  variant = "default",
  ...props
}) => {
  const theme = useTheme();
  const {
    children,
    classes,
    description,
    size = "md",
    required = false,
    ...rest
  } = {
    ...theme?.Label?.[variant],
    ...props,
  };

  const dataAttributes = useMemo(
    () => ({
      "data-size": size,
      ...getDataAttributes(rest),
    }),
    [size, rest]
  );

  return (
    <div
      {...dataAttributes}
      className={tw("is-disabled:opacity-50", classes?.root)}
    >
      <label
        {...dataAttributes}
        {...rest}
        className={tw(
          "is-xs:font-bold is-xs:text-xs is-sm:text-sm is-lg:text-lg is-xl:text-xl",
          classes?.label
        )}
      >
        {children}
        {required && (
          <span
            {...dataAttributes}
            className={tw("pl-1 text-error-400", classes?.required)}
          >
            *
          </span>
        )}
      </label>
      {description && (
        <div
          {...dataAttributes}
          className={tw(
            "text-xs is-lg:font-thin is-lg:text-sm is-xl:font-thin is-xl:text-base text-neutral-500",
            classes?.description
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};