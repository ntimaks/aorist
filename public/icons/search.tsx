export default function Search({ size, color, className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? '48'}
      viewBox="0 -960 960 960"
      width={size ?? '48'}
      fill={color ?? 'white'}
      className={className}
    >
      <path d="M794-96 525.79-364q-29.79 22.92-68.25 35.96T373.44-315q-115.31 0-193.88-78.7Q101-472.41 101-585.2q0-112.8 78.7-191.3Q258.41-855 371.2-855q112.8 0 191.3 78.64Q641-697.71 641-584.85q0 45.85-13 83.35-13 37.5-38 71.5l270 268-66 66ZM371.44-406q75.99 0 127.27-51.54Q550-509.08 550-584.59q0-75.5-51.35-127.46Q447.31-764 371.53-764q-76.61 0-128.07 51.95Q192-660.09 192-584.59q0 75.51 51.31 127.05Q294.62-406 371.44-406Z" />
    </svg>
  );
}
