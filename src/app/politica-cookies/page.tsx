import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Cookies | DevNation593",
  description:
    "Política de cookies de DevNation593. Conoce qué cookies utilizamos, su finalidad y cómo gestionarlas conforme a la legislación ecuatoriana.",
};

export default function PoliticaCookies() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="8 de marzo de 2026">
      <section>
        <h2>1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o
          smartphone) cuando visita un sitio web. Estas permiten que el sitio recuerde sus acciones y preferencias
          durante un período de tiempo, de modo que no tenga que volver a configurarlas cada vez que regrese o navegue
          entre diferentes páginas.
        </p>
      </section>

      <section>
        <h2>2. Marco Legal</h2>
        <p>
          La presente Política de Cookies se rige por la{" "}
          <strong>Ley Orgánica de Protección de Datos Personales (LOPDP)</strong> del Ecuador, que en su Art. 7 exige
          el consentimiento informado del titular para el tratamiento de datos personales. Asimismo, se tienen en
          cuenta las disposiciones de la{" "}
          <strong>Ley de Comercio Electrónico, Firmas Electrónicas y Mensajes de Datos</strong> y las mejores
          prácticas internacionales en materia de privacidad digital.
        </p>
        <p>
          Conforme a la LOPDP, <strong>DevNation593</strong> requiere su consentimiento antes de instalar cookies no
          esenciales en su dispositivo.
        </p>
      </section>

      <section>
        <h2>3. Tipos de Cookies que Utilizamos</h2>

        <h3>3.1 Cookies Estrictamente Necesarias</h3>
        <p>
          Son esenciales para el funcionamiento del sitio web. Sin estas cookies, el sitio no podría funcionar
          correctamente. No requieren consentimiento.
        </p>
        <ul>
          <li><strong>Cookies de sesión:</strong> Mantienen su sesión activa mientras navega por el sitio.</li>
          <li><strong>Cookies de seguridad:</strong> Ayudan a detectar actividades fraudulentas y proteger al usuario.</li>
          <li><strong>Cookies de preferencia de cookies:</strong> Almacenan su elección sobre la aceptación o rechazo de cookies.</li>
        </ul>

        <h3>3.2 Cookies de Rendimiento y Analítica</h3>
        <p>
          Nos permiten analizar cómo los usuarios interactúan con nuestro sitio web para mejorar su funcionamiento y
          experiencia. La información recopilada es agregada y anónima.
        </p>
        <ul>
          <li><strong>Cookies de analítica web:</strong> Recopilan datos estadísticos como número de visitantes, páginas más visitadas, duración de la visita, etc.</li>
          <li><strong>Cookies de rendimiento:</strong> Ayudan a identificar y resolver errores o problemas de carga.</li>
        </ul>

        <h3>3.3 Cookies de Funcionalidad</h3>
        <p>Permiten recordar las preferencias del usuario para ofrecer una experiencia personalizada.</p>
        <ul>
          <li><strong>Cookies de idioma:</strong> Recuerdan el idioma seleccionado por el usuario.</li>
          <li><strong>Cookies de personalización:</strong> Almacenan preferencias de visualización u otras configuraciones.</li>
        </ul>

        <h3>3.4 Cookies de Terceros</h3>
        <p>
          Son cookies instaladas por servicios de terceros que utilizamos en nuestro sitio web. Estas cookies están
          sujetas a las políticas de privacidad de dichos terceros.
        </p>
        <ul>
          <li><strong>Servicios de analítica:</strong> Para el análisis estadístico del uso del sitio web.</li>
          <li><strong>Redes sociales:</strong> Cuando interactúa con botones o enlaces a redes sociales integrados en nuestro sitio.</li>
        </ul>
      </section>

      <section>
        <h2>4. Detalle de Cookies Utilizadas</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-card text-white">
                <th className="px-4 py-3 text-left border-b border-border">Cookie</th>
                <th className="px-4 py-3 text-left border-b border-border">Tipo</th>
                <th className="px-4 py-3 text-left border-b border-border">Finalidad</th>
                <th className="px-4 py-3 text-left border-b border-border">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3">cookie_consent</td>
                <td className="px-4 py-3">Necesaria</td>
                <td className="px-4 py-3">Almacena la preferencia de cookies del usuario</td>
                <td className="px-4 py-3">1 año</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">session_id</td>
                <td className="px-4 py-3">Necesaria</td>
                <td className="px-4 py-3">Mantiene la sesión del usuario</td>
                <td className="px-4 py-3">Sesión</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3">_ga / _gid</td>
                <td className="px-4 py-3">Analítica</td>
                <td className="px-4 py-3">Google Analytics - análisis de tráfico</td>
                <td className="px-4 py-3">2 años / 24h</td>
              </tr>
              <tr>
                <td className="px-4 py-3">lang_pref</td>
                <td className="px-4 py-3">Funcionalidad</td>
                <td className="px-4 py-3">Recuerda el idioma preferido</td>
                <td className="px-4 py-3">1 año</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>5. Consentimiento</h2>
        <p>
          Al visitar nuestro sitio web por primera vez, se le mostrará un aviso informándole sobre el uso de cookies.
          Usted podrá:
        </p>
        <ul>
          <li><strong>Aceptar todas las cookies:</strong> Permite el uso de todas las categorías de cookies descritas.</li>
          <li><strong>Rechazar cookies no esenciales:</strong> Solo se instalarán las cookies estrictamente necesarias para el funcionamiento del sitio.</li>
          <li><strong>Configurar cookies:</strong> Seleccionar qué categorías de cookies desea permitir.</li>
        </ul>
        <p>
          Su consentimiento es libre, específico, informado e inequívoco, conforme lo exige el Art. 8 de la LOPDP. Puede
          retirar su consentimiento en cualquier momento sin que ello afecte la licitud del tratamiento previo.
        </p>
      </section>

      <section>
        <h2>6. ¿Cómo Gestionar las Cookies?</h2>
        <p>
          Además de las opciones que le ofrecemos en nuestro sitio web, puede gestionar y eliminar cookies a través de
          la configuración de su navegador:
        </p>
        <ul>
          <li>
            <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
          </li>
          <li>
            <strong>Mozilla Firefox:</strong> Ajustes → Privacidad y seguridad → Cookies y datos del sitio
          </li>
          <li>
            <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web
          </li>
          <li>
            <strong>Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio → Cookies y datos almacenados
          </li>
        </ul>
        <p>
          Tenga en cuenta que la desactivación de cookies puede afectar la funcionalidad de algunas secciones del sitio
          web.
        </p>
      </section>

      <section>
        <h2>7. Transferencia de Datos a Terceros</h2>
        <p>
          Algunas cookies de terceros pueden implicar la transferencia de datos fuera del Ecuador. En tales casos,
          DevNation593 garantiza que dichos terceros cumplan con estándares adecuados de protección de datos, conforme
          a los artículos 37 y 38 de la LOPDP.
        </p>
      </section>

      <section>
        <h2>8. Derechos del Usuario</h2>
        <p>
          En relación con los datos recopilados mediante cookies, usted tiene los mismos derechos establecidos en la
          LOPDP (acceso, rectificación, cancelación, oposición, portabilidad). Para ejercerlos, consulte nuestra{" "}
          <a href="/politica-privacidad">Política de Privacidad</a>.
        </p>
      </section>

      <section>
        <h2>9. Actualizaciones de esta Política</h2>
        <p>
          DevNation593 podrá actualizar esta Política de Cookies para reflejar cambios en las cookies que utilizamos o
          por motivos legales, operativos o regulatorios. Le recomendamos revisarla periódicamente. Cualquier cambio
          significativo será notificado a través de nuestro sitio web.
        </p>
      </section>

      <section>
        <h2>10. Contacto</h2>
        <p>
          Si tiene preguntas sobre nuestra Política de Cookies, puede contactarnos a través de:
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
