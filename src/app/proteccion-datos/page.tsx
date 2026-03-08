import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Protección de Datos Personales | DevNation593",
  description:
    "Política de protección de datos personales de DevNation593, conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador.",
};

export default function ProteccionDatos() {
  return (
    <LegalLayout title="Protección de Datos Personales" lastUpdated="8 de marzo de 2026">
      <section>
        <h2>1. Compromiso con la Protección de Datos</h2>
        <p>
          <strong>DevNation593</strong> se compromete con la protección integral de los datos personales de sus
          clientes, usuarios y visitantes. Este compromiso se fundamenta en el respeto al derecho constitucional a la
          protección de datos personales consagrado en el <strong>Art. 66, numeral 19 de la Constitución de la
          República del Ecuador</strong>, que reconoce y garantiza el derecho a la protección de datos de carácter
          personal, incluyendo el acceso y la decisión sobre información y datos de este carácter.
        </p>
      </section>

      <section>
        <h2>2. Marco Normativo</h2>
        <p>Nuestra política de protección de datos se fundamenta en la siguiente normativa:</p>
        <ul>
          <li>
            <strong>Constitución de la República del Ecuador:</strong> Art. 66 numeral 19 (derecho a la protección de
            datos personales) y Art. 92 (acción de hábeas data).
          </li>
          <li>
            <strong>Ley Orgánica de Protección de Datos Personales (LOPDP):</strong> Registro Oficial Suplemento
            No. 459 del 26 de mayo de 2021, que establece el marco integral para la protección de datos personales en
            Ecuador.
          </li>
          <li>
            <strong>Reglamento General a la LOPDP:</strong> Desarrolla y complementa las disposiciones de la Ley.
          </li>
          <li>
            <strong>Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos:</strong> En lo relativo a la
            protección de datos en medios electrónicos.
          </li>
          <li>
            <strong>Código Orgánico Integral Penal (COIP):</strong> En relación con los delitos contra la
            inviolabilidad de la intimidad y la revelación de secretos (Arts. 178-180).
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Principios de Protección de Datos</h2>
        <p>
          Conforme al Art. 10 de la LOPDP, DevNation593 aplica los siguientes principios en el tratamiento de datos
          personales:
        </p>
        <ul>
          <li>
            <strong>Juridicidad:</strong> Todo tratamiento de datos se realiza conforme a la legislación vigente.
          </li>
          <li>
            <strong>Lealtad:</strong> Los datos se tratan de manera leal, sin engaño ni manipulación.
          </li>
          <li>
            <strong>Transparencia:</strong> Proporcionamos información clara y comprensible sobre el tratamiento de
            datos.
          </li>
          <li>
            <strong>Finalidad:</strong> Los datos se recopilan para fines determinados, explícitos y legítimos, y no
            serán tratados de manera incompatible con dichos fines.
          </li>
          <li>
            <strong>Pertinencia y minimización:</strong> Solo recopilamos los datos estrictamente necesarios para la
            finalidad establecida.
          </li>
          <li>
            <strong>Proporcionalidad:</strong> El tratamiento es adecuado, relevante y no excesivo en relación con las
            finalidades perseguidas.
          </li>
          <li>
            <strong>Confidencialidad:</strong> Garantizamos la confidencialidad de los datos en todas las fases del
            tratamiento.
          </li>
          <li>
            <strong>Calidad y exactitud:</strong> Mantenemos los datos actualizados y exactos, adoptando medidas para
            rectificar o suprimir datos inexactos.
          </li>
          <li>
            <strong>Conservación:</strong> Los datos se conservan durante el tiempo estrictamente necesario para la
            finalidad del tratamiento.
          </li>
          <li>
            <strong>Seguridad:</strong> Implementamos medidas técnicas y organizativas para garantizar la seguridad
            de los datos.
          </li>
          <li>
            <strong>Responsabilidad proactiva:</strong> Adoptamos políticas y medidas internas para demostrar el
            cumplimiento de la normativa de protección de datos.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Delegado de Protección de Datos</h2>
        <p>
          Conforme al Art. 45 de la LOPDP, DevNation593 ha designado un punto de contacto para asuntos relacionados
          con la protección de datos personales. Para cualquier consulta o solicitud, puede dirigirse a:
        </p>
        <ul>
          <li><strong>Correo electrónico:</strong> <a href="mailto:hello@devnation593.com">hello@devnation593.com</a></li>
          <li><strong>Asunto:</strong> Protección de Datos Personales</li>
        </ul>
      </section>

      <section>
        <h2>5. Categorías de Datos Tratados</h2>

        <h3>5.1 Datos Identificativos</h3>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
        </ul>

        <h3>5.2 Datos Profesionales</h3>
        <ul>
          <li>Empresa u organización</li>
          <li>Cargo o función</li>
          <li>Información relacionada con proyectos de desarrollo de software</li>
        </ul>

        <h3>5.3 Datos Técnicos</h3>
        <ul>
          <li>Dirección IP</li>
          <li>Datos de navegación</li>
          <li>Información del dispositivo y navegador</li>
          <li>Datos de cookies (ver <a href="/politica-cookies">Política de Cookies</a>)</li>
        </ul>

        <h3>5.4 Datos Sensibles</h3>
        <p>
          DevNation593 <strong>no recopila datos sensibles</strong> tales como datos relativos a la salud, origen
          étnico, creencias religiosas, orientación sexual, datos biométricos, afiliación política o sindical, según
          lo definido en el Art. 25 de la LOPDP.
        </p>
      </section>

      <section>
        <h2>6. Medidas de Seguridad</h2>
        <p>
          En cumplimiento del Art. 37 de la LOPDP, DevNation593 implementa las siguientes medidas de seguridad:
        </p>

        <h3>6.1 Medidas Técnicas</h3>
        <ul>
          <li>Cifrado de datos en tránsito mediante protocolo TLS/SSL</li>
          <li>Cifrado de datos en reposo en bases de datos y sistemas de almacenamiento</li>
          <li>Firewalls y sistemas de detección de intrusos</li>
          <li>Actualizaciones periódicas de seguridad en todos los sistemas</li>
          <li>Copias de seguridad automatizadas con almacenamiento seguro</li>
          <li>Control de acceso mediante autenticación multifactor</li>
        </ul>

        <h3>6.2 Medidas Organizativas</h3>
        <ul>
          <li>Políticas internas de seguridad de la información</li>
          <li>Acuerdos de confidencialidad con todo el personal</li>
          <li>Capacitación periódica del personal en protección de datos</li>
          <li>Control de acceso basado en roles y principio de mínimo privilegio</li>
          <li>Procedimientos de gestión de incidentes de seguridad</li>
          <li>Evaluaciones periódicas de vulnerabilidades</li>
        </ul>
      </section>

      <section>
        <h2>7. Notificación de Brechas de Seguridad</h2>
        <p>
          Conforme al Art. 38 de la LOPDP, en caso de producirse una vulneración de seguridad que afecte datos
          personales, DevNation593 se compromete a:
        </p>
        <ul>
          <li>
            Notificar a la <strong>Autoridad de Protección de Datos Personales</strong> dentro de las{" "}
            <strong>72 horas</strong> siguientes a tener conocimiento de la brecha, cuando esta pueda generar un riesgo
            para los derechos y libertades de los titulares.
          </li>
          <li>
            Notificar a los <strong>titulares afectados</strong> sin dilación indebida cuando la brecha suponga un alto
            riesgo para sus derechos y libertades.
          </li>
          <li>
            Documentar todas las vulneraciones de seguridad, incluyendo los hechos, sus efectos y las medidas
            correctivas adoptadas.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Evaluación de Impacto en Protección de Datos</h2>
        <p>
          Cuando un tratamiento de datos pueda suponer un alto riesgo para los derechos y libertades de las personas,
          DevNation593 realizará una <strong>Evaluación de Impacto en la Protección de Datos (EIPD)</strong> conforme
          al Art. 43 de la LOPDP, que incluirá:
        </p>
        <ul>
          <li>Descripción sistemática del tratamiento y su finalidad</li>
          <li>Evaluación de la necesidad y proporcionalidad del tratamiento</li>
          <li>Evaluación de los riesgos para los derechos y libertades de los titulares</li>
          <li>Medidas previstas para afrontar los riesgos identificados</li>
        </ul>
      </section>

      <section>
        <h2>9. Transferencias Internacionales de Datos</h2>
        <p>
          En caso de que sea necesario transferir datos personales fuera del territorio ecuatoriano, DevNation593
          garantiza el cumplimiento de los artículos 37 y 38 de la LOPDP, asegurando que:
        </p>
        <ul>
          <li>El país destinatario ofrezca un nivel adecuado de protección de datos.</li>
          <li>
            Se establezcan garantías adecuadas mediante cláusulas contractuales tipo o mecanismos equivalentes.
          </li>
          <li>Se obtenga el consentimiento explícito del titular cuando corresponda.</li>
          <li>
            La transferencia sea necesaria para la ejecución de un contrato entre el titular y DevNation593.
          </li>
        </ul>
      </section>

      <section>
        <h2>10. Derechos de los Titulares</h2>
        <p>
          Los titulares de datos personales pueden ejercer los siguientes derechos establecidos en los artículos 17 al
          24 de la LOPDP:
        </p>
        <ul>
          <li><strong>Derecho de acceso (Art. 17):</strong> Obtener confirmación de si se están tratando sus datos y acceder a ellos.</li>
          <li><strong>Derecho de rectificación (Art. 18):</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Derecho de eliminación (Art. 19):</strong> Solicitar la supresión de sus datos personales.</li>
          <li><strong>Derecho de oposición (Art. 20):</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
          <li><strong>Derecho a la portabilidad (Art. 21):</strong> Recibir sus datos en formato estructurado y de uso común.</li>
          <li><strong>Derecho a no ser objeto de decisiones automatizadas (Art. 22):</strong> No ser sometido a decisiones basadas únicamente en tratamiento automatizado.</li>
          <li><strong>Derecho de suspensión del tratamiento (Art. 23):</strong> Solicitar la suspensión del tratamiento en los casos previstos por la ley.</li>
          <li><strong>Derecho de consulta (Art. 24):</strong> Consultar ante la autoridad de protección de datos sobre el tratamiento de sus datos.</li>
        </ul>

        <h3>Procedimiento para Ejercer los Derechos</h3>
        <ol>
          <li>
            Envíe una solicitud a <a href="mailto:hello@devnation593.com">hello@devnation593.com</a> indicando el
            derecho que desea ejercer.
          </li>
          <li>
            Incluya su nombre completo y datos de contacto para verificar su identidad.
          </li>
          <li>
            DevNation593 responderá en un plazo máximo de <strong>quince (15) días hábiles</strong>, conforme a la LOPDP.
          </li>
          <li>
            El ejercicio de estos derechos es <strong>gratuito</strong>, salvo que las solicitudes sean manifiestamente
            infundadas o excesivas.
          </li>
        </ol>
      </section>

      <section>
        <h2>11. Tratamiento de Datos en Servicios de Desarrollo</h2>
        <p>
          Cuando DevNation593 acceda a datos personales de terceros en el marco de la prestación de servicios de
          desarrollo de software a sus clientes:
        </p>
        <ul>
          <li>
            DevNation593 actuará como <strong>encargado del tratamiento</strong> conforme al Art. 44 de la LOPDP.
          </li>
          <li>
            Se suscribirá un contrato de encargo de tratamiento que establezca las obligaciones, condiciones y
            garantías aplicables.
          </li>
          <li>
            Los datos serán tratados únicamente conforme a las instrucciones documentadas del responsable del
            tratamiento (cliente).
          </li>
          <li>
            Se garantizará la confidencialidad, integridad y disponibilidad de los datos tratados.
          </li>
          <li>
            Al finalizar la relación contractual, los datos serán devueltos al cliente o eliminados de forma segura.
          </li>
        </ul>
      </section>

      <section>
        <h2>12. Acción de Hábeas Data</h2>
        <p>
          Conforme al <strong>Art. 92 de la Constitución del Ecuador</strong>, toda persona tiene derecho a conocer
          la existencia y acceder a los documentos, datos genéticos, bancos o archivos de datos personales e informes
          que sobre sí misma consten en entidades públicas o privadas. También tiene derecho a conocer el uso que se
          haga de ellos, su finalidad, el origen y destino de la información personal, así como el tiempo de vigencia
          del archivo o banco de datos.
        </p>
        <p>
          Si el titular considera que sus derechos han sido vulnerados, puede interponer una{" "}
          <strong>acción de hábeas data</strong> ante las autoridades judiciales competentes.
        </p>
      </section>

      <section>
        <h2>13. Sanciones por Incumplimiento</h2>
        <p>
          DevNation593 es consciente de que el incumplimiento de la LOPDP puede dar lugar a las siguientes sanciones
          conforme al Art. 67 de la Ley:
        </p>
        <ul>
          <li><strong>Infracciones leves:</strong> Multa de 1 a 10 salarios básicos unificados del trabajador.</li>
          <li><strong>Infracciones graves:</strong> Multa de 10 a 20 salarios básicos unificados del trabajador.</li>
          <li><strong>Infracciones muy graves:</strong> Multa de 20 a 1% de la facturación del ejercicio económico anterior.</li>
        </ul>
        <p>
          Por ello, mantenemos un estricto cumplimiento de todas las disposiciones de protección de datos aplicables.
        </p>
      </section>

      <section>
        <h2>14. Contacto</h2>
        <p>
          Para cualquier consulta o solicitud relacionada con la protección de sus datos personales, puede contactarnos
          a través de:
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
