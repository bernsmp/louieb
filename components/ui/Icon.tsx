import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
  size?: number;
}

export function Icon({ src, alt, className = "", size = 48 }: IconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
}

