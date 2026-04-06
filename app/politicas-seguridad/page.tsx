"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";

const sections = [
  {
    number: "1",
    title: { es: "Naturaleza de las actividades", en: "Nature of activities" },
    content: {
      es: "Las actividades ofrecidas por Trama Viva están orientadas al bienestar integral, el autoconocimiento y el desarrollo personal. No constituyen, ni sustituyen, tratamientos médicos, psicológicos o psiquiátricos profesionales.",
      en: "The activities offered by Trama Viva are oriented towards integral wellbeing, self-knowledge and personal development. They do not constitute, nor replace, professional medical, psychological or psychiatric treatments.",
    },
  },
  {
    number: "2",
    title: { es: "Responsabilidad individual", en: "Individual responsibility" },
    content: {
      es: "La participación es voluntaria y cada persona es responsable de su estado físico, mental y emocional. Se espera que cada participante evalúe de manera consciente su idoneidad para participar en las actividades.\n\nTrama Viva no se hace responsable por decisiones personales tomadas antes, durante o después de las experiencias.",
      en: "Participation is voluntary and each person is responsible for their physical, mental and emotional state. Each participant is expected to consciously assess their suitability for participating in the activities.\n\nTrama Viva is not responsible for personal decisions made before, during or after the experiences.",
    },
  },
  {
    number: "3",
    title: { es: "Evaluación previa y condiciones de salud", en: "Prior evaluation and health conditions" },
    content: {
      es: "Para determinadas actividades, podrá solicitarse la cumplimentación de un formulario previo. La persona participante se compromete a proporcionar información veraz, completa y actualizada.\n\nSe recomienda abstenerse de participar o consultar previamente con un profesional de la salud en caso de:\n\n• Trastornos psiquiátricos diagnosticados (incluyendo esquizofrenia, trastorno bipolar o antecedentes de episodios psicóticos)\n• Uso de medicación psiquiátrica (antidepresivos, antipsicóticos u otros)\n• Enfermedades cardiovasculares o neurológicas\n• Embarazo o período de lactancia\n• Cualquier otra condición médica relevante\n\nNo se recomienda suspender tratamientos médicos sin supervisión profesional.",
      en: "For certain activities, completion of a prior form may be requested. The participant undertakes to provide truthful, complete and up-to-date information.\n\nIt is recommended to refrain from participating or to consult a health professional beforehand in case of:\n\n• Diagnosed psychiatric disorders (including schizophrenia, bipolar disorder or history of psychotic episodes)\n• Use of psychiatric medication (antidepressants, antipsychotics or others)\n• Cardiovascular or neurological diseases\n• Pregnancy or breastfeeding period\n• Any other relevant medical condition\n\nIt is not recommended to suspend medical treatments without professional supervision.",
    },
  },
  {
    number: "4",
    title: { es: "Consentimiento informado", en: "Informed consent" },
    content: {
      es: "Al participar, la persona reconoce haber recibido información clara sobre la naturaleza de las actividades y comprende que algunas experiencias pueden movilizar aspectos físicos, emocionales o psicológicos. La participación implica un consentimiento libre, consciente e informado.",
      en: "By participating, the person acknowledges having received clear information about the nature of the activities and understands that some experiences may mobilize physical, emotional or psychological aspects. Participation implies free, conscious and informed consent.",
    },
  },
  {
    number: "5",
    title: { es: "Enfoque sobre plantas medicinales", en: "Approach to medicinal plants" },
    content: {
      es: "Algunas experiencias pueden estar inspiradas en prácticas tradicionales o contemporáneas vinculadas al trabajo con plantas medicinales y estados ampliados de conciencia.\n\nTrama Viva no promueve, comercializa ni distribuye sustancias psicoactivas cuya regulación pueda variar según la legislación vigente. La relación con este tipo de prácticas es de carácter educativo, de acompañamiento e integración.\n\nCualquier decisión individual de involucrarse en experiencias con plantas medicinales o sustancias psicoactivas se realiza bajo la exclusiva responsabilidad de la persona participante, quien asume los aspectos físicos, psicológicos y legales asociados.\n\nSe desaconseja especialmente la participación en este tipo de prácticas en caso de antecedentes de trastornos psiquiátricos, uso de medicación psiquiátrica o condiciones médicas relevantes sin evaluación profesional previa.",
      en: "Some experiences may be inspired by traditional or contemporary practices linked to working with medicinal plants and expanded states of consciousness.\n\nTrama Viva does not promote, commercialize or distribute psychoactive substances whose regulation may vary according to current legislation. The relationship with these practices is educational, accompaniment and integration in nature.\n\nAny individual decision to engage in experiences with medicinal plants or psychoactive substances is made under the exclusive responsibility of the participant, who assumes the associated physical, psychological and legal aspects.\n\nParticipation in such practices is especially discouraged in cases of a history of psychiatric disorders, use of psychiatric medication or relevant medical conditions without prior professional evaluation.",
    },
  },
  {
    number: "6",
    title: { es: "Normas de conducta", en: "Code of conduct" },
    content: {
      es: "Se espera una conducta respetuosa hacia facilitadores, participantes y el entorno.\n\nNo está permitido:\n\n• Conductas agresivas o discriminatorias\n• Interferir en los procesos de otras personas\n• El consumo de sustancias no autorizadas durante las actividades\n\nEl incumplimiento podrá resultar en la exclusión de la actividad sin derecho a reembolso.",
      en: "Respectful conduct towards facilitators, participants and the environment is expected.\n\nNot permitted:\n\n• Aggressive or discriminatory behavior\n• Interfering in other people's processes\n• Consumption of unauthorized substances during activities\n\nNon-compliance may result in exclusion from the activity without right to a refund.",
    },
  },
  {
    number: "7",
    title: { es: "Limitación de responsabilidad", en: "Limitation of liability" },
    content: {
      es: "En la máxima medida permitida por la legislación aplicable, Trama Viva no será responsable por daños directos o indirectos derivados de la participación en sus actividades.\n\nLa persona participante reconoce y asume los riesgos inherentes a este tipo de experiencias.",
      en: "To the maximum extent permitted by applicable law, Trama Viva shall not be liable for direct or indirect damages arising from participation in its activities.\n\nThe participant acknowledges and assumes the inherent risks of this type of experience.",
    },
  },
  {
    number: "8",
    title: { es: "Derecho de admisión y permanencia", en: "Right of admission and permanence" },
    content: {
      es: "Trama Viva se reserva el derecho de admisión y permanencia. Podrá denegarse o interrumpirse la participación cuando se considere que existe un riesgo para la persona, para terceros o para el adecuado desarrollo de la actividad.",
      en: "Trama Viva reserves the right of admission and permanence. Participation may be denied or interrupted when it is considered that there is a risk to the person, to third parties or to the proper development of the activity.",
    },
  },
  {
    number: "9",
    title: { es: "Confidencialidad", en: "Confidentiality" },
    content: {
      es: "Se promueve un entorno de respeto y privacidad. Se espera que toda la información compartida dentro de los espacios sea tratada con confidencialidad.",
      en: "An environment of respect and privacy is promoted. All information shared within the spaces is expected to be treated with confidentiality.",
    },
  },
  {
    number: "10",
    title: { es: "Integración", en: "Integration" },
    content: {
      es: "Se recomienda a las personas participantes tomarse el tiempo necesario para integrar las experiencias vividas. Trama Viva podrá sugerir prácticas o espacios de acompañamiento, sin que ello constituya un servicio terapéutico formal.",
      en: "Participants are encouraged to take the necessary time to integrate the experiences lived. Trama Viva may suggest practices or accompaniment spaces, without this constituting a formal therapeutic service.",
    },
  },
];

export default function PoliticasSeguridad() {
  const { locale } = useLanguage();

  return (
    <main className="bg-[#E8DCC4] text-[#3B1B0E] min-h-screen font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-12 bg-[#292E17]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#868859] mb-4">
              Trama Viva
            </p>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#E8DCC4] leading-tight">
              {locale === "es"
                ? "Políticas de Seguridad y Participación"
                : "Safety and Participation Policies"}
            </h1>
            <p className="mt-6 text-[#E8DCC4]/60 text-lg leading-relaxed max-w-2xl">
              {locale === "es"
                ? "Al inscribirse o participar en cualquiera de nuestras experiencias, la persona participante declara haber leído, comprendido y aceptado estas condiciones."
                : "By registering or participating in any of our experiences, the participant declares to have read, understood and accepted these conditions."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#868859]/10 border border-[#868859]/20 rounded-2xl p-8"
          >
            <p className="text-[#3B1B0E]/70 leading-relaxed">
              {locale === "es"
                ? "Trama Viva ofrece experiencias de bienestar y acompañamiento que no sustituyen atención médica o psicológica. No promueve ni distribuye sustancias reguladas. Toda participación es voluntaria y bajo responsabilidad individual."
                : "Trama Viva offers wellbeing and accompaniment experiences that do not substitute medical or psychological care. It does not promote or distribute regulated substances. All participation is voluntary and under individual responsibility."}
            </p>
          </motion.div>

          {/* Secciones */}
          {sections.map((section, i) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-b border-[#868859]/20 pb-12 last:border-0"
            >
              <div className="flex items-start gap-6">
                <span className="text-4xl font-bold font-serif text-[#868859]/30 leading-none flex-shrink-0">
                  {section.number.padStart(2, "0")}
                </span>
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold font-serif text-[#292E17]">
                    {section.title[locale as "es" | "en"]}
                  </h2>
                  <p className="text-[#3B1B0E]/70 leading-relaxed whitespace-pre-line">
                    {section.content[locale as "es" | "en"]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />
    </main>
  );
}