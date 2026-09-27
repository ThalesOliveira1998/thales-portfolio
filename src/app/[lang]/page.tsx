import PillScene from "@/components/PillScene";
import type { Lang } from "@/data";

export default async function Escolha({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  return <PillScene lang={lang as Lang} />;
}
