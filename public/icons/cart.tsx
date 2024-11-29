export default function Cart({ size = 50, color, className }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={color ?? 'currentColor'}
      className={className}
    >
      <path d="M230-59q-37.18 0-64.09-26.91Q139-112.83 139-150v-489q0-37.59 26.91-64.79Q192.82-731 230-731h85v-10q2-67 49.77-114 47.78-47 115.19-47 67.4 0 115.72 47Q644-808 646-741v10h84q37.59 0 64.79 27.21Q822-676.59 822-639v489q0 37.17-27.21 64.09Q767.59-59 730-59H230Zm0-91h500v-489h-84v74q0 19.35-13.65 32.67Q618.7-519 599.82-519q-18.44 0-31.63-13.33Q555-545.65 555-565v-74H406v74q0 19.35-13.65 32.67Q378.7-519 359.82-519q-18.44 0-31.63-13.33Q315-545.65 315-565v-74h-85v489Zm177-581h147v-10q-2-28-23.18-48.5-21.17-20.5-51-20.5-29.82 0-50.32 20.5T407-741v10ZM230-150v-489 489Z" />
    </svg>
  );
}
