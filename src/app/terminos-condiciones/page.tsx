import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Términos y Condiciones | DevNation593",
  description:
    "Términos y condiciones de uso de los servicios de DevNation593. Conoce las condiciones generales de contratación y uso de nuestro sitio web.",
};

export default function TerminosCondiciones() {
  return (
    <LegalLayout title="Términos y Condiciones" lastUpdated="8 de marzo de 2026">
      <section>
        <h2>1. Información General</h2>
        <p>
          Los presentes Términos y Condiciones regulan el acceso y uso del sitio web de{" "}
          <strong>DevNation593</strong> (en adelante, &quot;la Empresa&quot;), así como la contratación de los servicios
          de desarrollo de software ofrecidos a través del mismo.
        </p>
        <p>
          Estos términos se rigen por la legislación de la República del Ecuador, incluyendo la{" "}
          <strong>Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos</strong> (Ley No. 2002-67), el{" "}
          <strong>Código Civil Ecuatoriano</strong>, el <strong>Código de Comercio</strong>, la{" "}
          <strong>Ley Orgánica de Defensa del Consumidor</strong> y demás normativa aplicable.
        </p>
        <p>
          Al acceder y utilizar este sitio web, usted acepta estos Términos y Condiciones en su totalidad. Si no está
          de acuerdo, le solicitamos abstenerse de utilizar nuestros servicios.
        </p>
      </section>

      <section>
        <h2>2. Identificación de la Empresa</h2>
        <ul>
          <li><strong>Nombre comercial:</strong> DevNation593</li>
          <li><strong>Domicilio:</strong> Quito, Ecuador</li>
          <li><strong>Correo electrónico:</strong> hello@devnation593.com</li>
          <li><strong>Teléfono:</strong> +593 00 000 0000</li>
        </ul>
      </section>

      <section>
        <h2>3. Servicios</h2>
        <p>DevNation593 ofrece los siguientes servicios de desarrollo tecnológico:</p>
        <ul>
          <li>Desarrollo de aplicaciones web</li>
          <li>Desarrollo de aplicaciones móviles</li>
          <li>Soluciones en la nube (Cloud)</li>
          <li>Diseño de interfaces de usuario (UI/UX)</li>
          <li>Desarrollo de software a medida</li>
        </ul>
        <p>
          Las características específicas, plazos de entrega, costos y condiciones particulares de cada servicio serán
          establecidos en contratos o propuestas individuales acordados entre las partes.
        </p>
      </section>

      <section>
        <h2>4. Condiciones de Contratación</h2>

        <h3>4.1 Proceso de Contratación</h3>
        <p>La contratación de servicios se realizará mediante los siguientes pasos:</p>
        <ol>
          <li>El cliente envía una solicitud de contacto describiendo su proyecto.</li>
          <li>DevNation593 elabora y envía una propuesta técnica y económica.</li>
          <li>Ambas partes acuerdan y firman un contrato de prestación de servicios.</li>
          <li>Se procede con la ejecución del proyecto conforme al cronograma acordado.</li>
        </ol>

        <h3>4.2 Precios y Formas de Pago</h3>
        <p>
          Los precios de los servicios serán establecidos en la propuesta económica o contrato correspondiente. Los
          pagos podrán realizarse mediante transferencia bancaria, depósito o los medios que las partes acuerden. Todos
          los precios incluirán los impuestos aplicables conforme a la legislación tributaria ecuatoriana.
        </p>

        <h3>4.3 Plazos de Entrega</h3>
        <p>
          Los plazos de entrega serán acordados en el contrato de prestación de servicios. DevNation593 se compromete a
          cumplir los plazos establecidos, salvo causas de fuerza mayor debidamente justificadas conforme al Art. 30
          del Código Civil Ecuatoriano.
        </p>
      </section>

      <section>
        <h2>5. Propiedad Intelectual</h2>
        <p>
          De conformidad con la <strong>Ley Orgánica de la Economía Naranja</strong> y el{" "}
          <strong>Código Orgánico de la Economía Social de los Conocimientos (COESC - Código Ingenios)</strong>:
        </p>
        <ul>
          <li>
            Todo el contenido del sitio web de DevNation593 (textos, gráficos, logotipos, imágenes, código fuente,
            diseños) está protegido por derechos de propiedad intelectual y pertenece a DevNation593.
          </li>
          <li>
            Los derechos de propiedad intelectual sobre los productos desarrollados para el cliente serán transferidos a
            este una vez completado el pago total del servicio, salvo acuerdo en contrario.
          </li>
          <li>
            DevNation593 se reserva el derecho de utilizar los proyectos realizados como referencia en su portafolio,
            salvo acuerdo de confidencialidad.
          </li>
          <li>
            Queda prohibida la reproducción, distribución o modificación del contenido del sitio web sin autorización
            expresa y por escrito de DevNation593.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Obligaciones del Usuario</h2>
        <p>El usuario se compromete a:</p>
        <ul>
          <li>Proporcionar información veraz, actualizada y completa.</li>
          <li>No utilizar el sitio web para fines ilícitos o contrarios a la legislación ecuatoriana.</li>
          <li>No intentar acceder de forma no autorizada a sistemas, datos o redes de DevNation593.</li>
          <li>No introducir virus, malware o cualquier código malicioso.</li>
          <li>Respetar los derechos de propiedad intelectual de DevNation593 y terceros.</li>
          <li>
            No reproducir, duplicar ni explotar con fines comerciales ninguna parte del sitio web sin autorización.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. Garantías y Responsabilidades</h2>

        <h3>7.1 Garantía de Servicios</h3>
        <p>
          DevNation593 garantiza la calidad técnica de los servicios prestados. Se ofrecerá un período de garantía
          contra defectos de software según lo estipulado en cada contrato individual, conforme a la{" "}
          <strong>Ley Orgánica de Defensa del Consumidor</strong>.
        </p>

        <h3>7.2 Limitación de Responsabilidad</h3>
        <p>DevNation593 no será responsable por:</p>
        <ul>
          <li>Daños indirectos, incidentales o consecuentes derivados del uso del sitio web.</li>
          <li>Interrupciones del servicio causadas por factores externos o fuerza mayor.</li>
          <li>Uso inadecuado del software desarrollado por parte del cliente.</li>
          <li>Contenido de sitios web de terceros enlazados desde nuestro sitio.</li>
        </ul>

        <h3>7.3 Disponibilidad del Sitio Web</h3>
        <p>
          DevNation593 se esfuerza por mantener el sitio web disponible de forma continua, pero no garantiza la
          disponibilidad ininterrumpida del mismo. Podrán realizarse labores de mantenimiento que requieran la
          suspensión temporal del servicio.
        </p>
      </section>

      <section>
        <h2>8. Confidencialidad</h2>
        <p>
          Ambas partes se comprometen a mantener la confidencialidad de la información intercambiada durante la
          relación comercial. Esta obligación subsistirá incluso después de terminada la relación contractual, conforme
          a lo establecido en el contrato de prestación de servicios.
        </p>
      </section>

      <section>
        <h2>9. Cancelación y Resolución</h2>
        <ul>
          <li>
            El cliente podrá cancelar un servicio contratado notificándolo por escrito. Las condiciones de reembolso
            dependerán del avance del proyecto y se regirán por lo estipulado en el contrato.
          </li>
          <li>
            DevNation593 podrá resolver el contrato en caso de incumplimiento por parte del cliente, previo aviso por
            escrito.
          </li>
          <li>
            En caso de cancelación, el cliente deberá pagar por el trabajo efectivamente realizado hasta la fecha de
            cancelación.
          </li>
        </ul>
      </section>

      <section>
        <h2>10. Protección de Datos Personales</h2>
        <p>
          El tratamiento de datos personales se realizará conforme a nuestra{" "}
          <a href="/politica-privacidad">Política de Privacidad</a> y a la{" "}
          <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong> del Ecuador. Para más información,
          consulte nuestra <a href="/proteccion-datos">Política de Protección de Datos</a>.
        </p>
      </section>

      <section>
        <h2>11. Legislación Aplicable y Jurisdicción</h2>
        <p>
          Los presentes Términos y Condiciones se rigen por las leyes de la República del Ecuador. Para la resolución
          de cualquier controversia derivada de estos términos, las partes se someterán a:
        </p>
        <ol>
          <li>
            <strong>Mediación:</strong> Como primera instancia, se intentará resolver la controversia mediante
            mediación en un centro autorizado por el Consejo de la Judicatura.
          </li>
          <li>
            <strong>Arbitraje:</strong> En caso de no llegar a un acuerdo, las partes podrán someter la controversia a
            arbitraje conforme a la <strong>Ley de Arbitraje y Mediación</strong> del Ecuador.
          </li>
          <li>
            <strong>Jurisdicción ordinaria:</strong> Subsidiariamente, serán competentes los jueces y tribunales de la
            ciudad de Quito, Ecuador.
          </li>
        </ol>
      </section>

      <section>
        <h2>12. Nulidad Parcial</h2>
        <p>
          Si alguna disposición de estos Términos y Condiciones fuera declarada nula o ineficaz por autoridad
          competente, las demás disposiciones continuarán en pleno vigor y efecto.
        </p>
      </section>

      <section>
        <h2>13. Modificaciones</h2>
        <p>
          DevNation593 se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las
          modificaciones entrarán en vigor desde su publicación en el sitio web. El uso continuado del sitio web
          después de dichas modificaciones implica la aceptación de los nuevos términos.
        </p>
      </section>

      <section>
        <h2>14. Contacto</h2>
        <p>
          Para consultas sobre estos Términos y Condiciones, puede contactarnos a través de:
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
