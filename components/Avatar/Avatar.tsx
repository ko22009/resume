import styles from "./Avatar.module.scss";
import Image from "next/image";
import cn from "classnames";

type AvatarProps = {
  url: string;
  alt: string;
  className?: string;
};

const Avatar = ({ url, alt, className }: AvatarProps) => (
  <div className={cn(styles.avatar, className)}>
    <Image src={url} alt={alt} layout="fill" priority />
  </div>
);

export default Avatar;
