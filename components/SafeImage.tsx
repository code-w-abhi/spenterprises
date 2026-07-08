import Image from "next/image";

type SafeImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

const KNOWN_HOSTS = [
  "images.unsplash.com",
  "res.cloudinary.com",
  "i.imgur.com",
];

function isKnownHost(src: string) {
  try {
    const host = new URL(src).hostname;
    return (
      KNOWN_HOSTS.includes(host) ||
      host.endsWith(".amazonaws.com") ||
      host.endsWith(".googleusercontent.com") ||
      host.endsWith(".supabase.co")
    );
  } catch {
    return false;
  }
}

export default function SafeImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
}: SafeImageProps) {
  if (!src) {
    return (
      <div className={`bg-brown/10 ${className ?? ""}`} aria-hidden="true" />
    );
  }

  if (!isKnownHost(src)) {
    if (fill) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover ${className ?? ""}`}
        />
      );
    }
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 600}
      priority={priority}
      className={className}
    />
  );
}
