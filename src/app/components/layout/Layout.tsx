import {cn} from "../../../../utils/cn";

import {cva, type VariantProps} from "class-variance-authority";

const variants = cva("  ", {
  variants: {
    size: {
      price:
        "col-span-2 w-[100%] border-r-2   flex items-center justify-center border-2 h-full ",
      noprice:
        "w-[100%] border-r-2   flex items-center justify-center border-2 h-full ",
      form: " flex-row gap-2 py-3 px-2",
    },
  },
  defaultVariants: {
    size: "price",
  },
});

type GridItemProps = {children: React.ReactNode} & VariantProps<
  typeof variants
>;

const Layout = ({size, children}: GridItemProps) => {
  return (
    <div className={cn(variants({size, className: "shadow"}))}>{children}</div>
  );
};

export default Layout;
