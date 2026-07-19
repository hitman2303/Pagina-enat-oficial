import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

export default function SocialLinks({ redes }) {
  return (
    <nav
      className="gym-socials"
      aria-label="Redes sociales del gimnasio"
    >
      {redes?.whatsapp && (
        <a
          href={redes.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      )}

      {redes?.instagram && (
        <a
          href={redes.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      )}

      {redes?.facebook && (
        <a
          href={redes.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      )}

      {redes?.tiktok && (
        <a
          href={redes.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
      )}
    </nav>
  );
}