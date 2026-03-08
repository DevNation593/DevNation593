import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidad | DevNation593",
  description:
    "Política de privacidad de DevNation593. Conoce cómo recopilamos, usamos y protegemos tu información personal conforme a la legislación ecuatoriana.",
};

export default function PoliticaPrivacidad() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="8 de marzo de 2026">
      <section>
        <h2>1. Introducción</h2>
        <p>
          En <strong>DevNation593</strong> (en adelante, &quot;la Empresa&quot;), con domicilio en Quito, Ecuador, nos
          comprometemos a proteger la privacidad y los datos personales de nuestros usuarios, clientes y visitantes del
          sitio web. La presente Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos
          su información personal.
        </p>
        <p>
          Esta política se rige por la <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong> del
          Ecuador, publicada en el Registro Oficial Suplemento No. 459 del 26 de mayo de 2021, la{" "}
          <strong>Constitución de la República del Ecuador</strong> (Art. 66, numeral 19), y la{" "}
          <strong>Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos</strong>.
        </p>
      </section>

      <section>
        <h2>2. Responsable del Tratamiento</h2>
        <ul>
          <li><strong>Razón social:</strong> DevNation593</li>
          <li><strong>Domicilio:</strong> Quito, Ecuador</li>
          <li><strong>Correo electrónico:</strong> hello@devnation593.com</li>
          <li><strong>Teléfono:</strong> +593 00 000 0000</li>
        </ul>
      </section>

      <section>
        <h2>3. Datos Personales que Recopilamos</h2>
        <p>Podemos recopilar los siguientes tipos de datos personales:</p>

        <h3>3.1 Datos proporcionados directamente por el usuario</h3>
        <ul>
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Información del proyecto o consulta enviada a través de nuestro formulario de contacto</li>
          <li>Cualquier otra información que el usuario decida compartir voluntariamente</li>
        </ul>

        <h3>3.2 Datos recopilados automáticamente</h3>
        <ul>
          <li>Dirección IP</li>
          <li>Tipo de navegador y sistema operativo</li>
          <li>Páginas visitadas y tiempo de permanencia</li>
          <li>Datos de cookies y tecnologías similares (ver nuestra Política de Cookies)</li>
        </ul>
      </section>

      <section>
        <h2>4. Finalidad del Tratamiento</h2>
        <p>
          Conforme al Art. 7 de la LOPDP, los datos personales recopilados serán utilizados para las siguientes
          finalidades:
        </p>
        <ul>
          <li>Responder solicitudes de contacto y consultas sobre nuestros servicios</li>
          <li>Gestionar la relación contractual con nuestros clientes</li>
          <li>Enviar comunicaciones relacionadas con nuestros servicios (previa autorización)</li>
          <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
          <li>Cumplir con obligaciones legales y regulatorias aplicables</li>
          <li>Realizar análisis estadísticos de uso del sitio web de forma anonimizada</li>
        </ul>
      </section>

      <section>
        <h2>5. Base Legal del Tratamiento</h2>
        <p>
          De conformidad con los artículos 7 y 8 de la LOPDP, el tratamiento de datos personales se fundamenta en:
        </p>
        <ul>
          <li>
            <strong>Consentimiento del titular:</strong> Cuando el usuario envía voluntariamente sus datos a través de
            nuestro formulario de contacto o cualquier otro medio.
          </li>
          <li>
            <strong>Ejecución de un contrato:</strong> Cuando el tratamiento es necesario para la prestación de
            nuestros servicios de desarrollo de software.
          </li>
          <li>
            <strong>Interés legítimo:</strong> Para la mejora continua de nuestros servicios y la seguridad de nuestra
            plataforma.
          </li>
          <li>
            <strong>Cumplimiento de obligación legal:</strong> Cuando sea requerido por las autoridades competentes.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Derechos del Titular de Datos (Derechos ARCO)</h2>
        <p>
          De acuerdo con los artículos 17 al 24 de la LOPDP, usted tiene los siguientes derechos:
        </p>
        <ul>
          <li>
            <strong>Acceso:</strong> Conocer qué datos personales suyos estamos tratando y las condiciones del
            tratamiento.
          </li>
          <li>
            <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.
          </li>
          <li>
            <strong>Cancelación/Eliminación:</strong> Solicitar la supresión de sus datos cuando ya no sean necesarios
            para la finalidad para la que fueron recopilados.
          </li>
          <li>
            <strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias.
          </li>
          <li>
            <strong>Portabilidad:</strong> Recibir sus datos personales en un formato estructurado, de uso común y
            lectura mecánica.
          </li>
          <li>
            <strong>Derecho a no ser objeto de decisiones automatizadas:</strong> Solicitar intervención humana en
            decisiones que le afecten significativamente.
          </li>
        </ul>
        <p>
          Para ejercer cualquiera de estos derechos, puede contactarnos a través de{" "}
          <a href="mailto:hello@devnation593.com">hello@devnation593.com</a>. Atenderemos su solicitud en un plazo
          máximo de quince (15) días hábiles conforme lo establece la LOPDP.
        </p>
      </section>

      <section>
        <h2>7. Transferencia y Comunicación de Datos</h2>
        <p>
          DevNation593 no venderá ni cederá sus datos personales a terceros. Sin embargo, podremos compartir su
          información en los siguientes casos:
        </p>
        <ul>
          <li>Con proveedores de servicios tecnológicos que actúan como encargados del tratamiento, bajo contratos que
            garanticen la protección de sus datos.</li>
          <li>Cuando exista una obligación legal o requerimiento de autoridad competente.</li>
          <li>Para la ejecución de un contrato en el que el titular sea parte.</li>
        </ul>
        <p>
          En caso de transferencia internacional de datos, se cumplirá con lo dispuesto en los artículos 37 y 38 de la
          LOPDP, garantizando un nivel de protección adecuado.
        </p>
      </section>

      <section>
        <h2>8. Seguridad de los Datos</h2>
        <p>
          Implementamos medidas técnicas, administrativas y organizativas apropiadas para proteger sus datos personales
          contra el acceso no autorizado, la alteración, divulgación o destrucción, conforme al Art. 37 de la LOPDP.
          Estas medidas incluyen:
        </p>
        <ul>
          <li>Cifrado de datos en tránsito y en reposo</li>
          <li>Control de acceso basado en roles</li>
          <li>Monitoreo y auditoría de accesos</li>
          <li>Copias de seguridad periódicas</li>
          <li>Capacitación del personal en protección de datos</li>
        </ul>
      </section>

      <section>
        <h2>9. Conservación de los Datos</h2>
        <p>
          Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir con la finalidad
          para la que fueron recopilados, o según lo exija la legislación ecuatoriana vigente. Una vez cumplida la
          finalidad, los datos serán eliminados de forma segura o anonimizados.
        </p>
      </section>

      <section>
        <h2>10. Menores de Edad</h2>
        <p>
          Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente datos personales
          de menores de edad. Si detectamos que hemos recopilado datos de un menor sin el consentimiento de su
          representante legal, procederemos a eliminarlos de inmediato conforme a los artículos 25 y 26 de la LOPDP.
        </p>
      </section>

      <section>
        <h2>11. Autoridad de Control</h2>
        <p>
          Si considera que el tratamiento de sus datos personales infringe la normativa vigente, tiene derecho a
          presentar una reclamación ante la{" "}
          <strong>Superintendencia de Protección de Datos Personales</strong> o ante la autoridad competente designada
          por el Estado ecuatoriano para la supervisión del cumplimiento de la LOPDP.
        </p>
      </section>

      <section>
        <h2>12. Modificaciones a esta Política</h2>
        <p>
          DevNation593 se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier
          cambio significativo será notificado a través de nuestro sitio web. Le recomendamos revisar periódicamente
          esta página para mantenerse informado.
        </p>
      </section>

      <section>
        <h2>13. Contacto</h2>
        <p>
          Si tiene preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad o el tratamiento
          de sus datos personales, puede contactarnos a través de:
        </p>
        <ul>
          <li><strong>Correo electrónico:</strong> <a href="mailto:hello@devnation593.com">hello@devnation593.com</a></li>
          <li><strong>Teléfono:</strong> +593 00 000 0000</li>
          <li><strong>Dirección:</strong> Quito, Ecuador</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
