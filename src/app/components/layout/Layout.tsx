import {cn} from "../../../../utils/cn";

import {cva, type VariantProps} from "class-variance-authority";

const variants = cva(
  " border-r-2 w-[100%]  flex items-center justify-center border-2 ",
  {
    variants: {
      size: {
        price: "col-span-2 ",
        noprice: "",
      },
    },
    defaultVariants: {
      size: "price",
    },
  }
);

type GridItemProps = {children: React.ReactNode} & VariantProps<
  typeof variants
>;

const Layout = ({size, children}: GridItemProps) => {
  return (
    <div className={cn(variants({size, className: "shadow"}))}>{children}</div>
  );
};

export default Layout;
