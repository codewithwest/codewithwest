import Link from "next/link";
import { DisplaySettings } from "@mui/icons-material";
import ThemedContainer from "../general/themedContainer";
import settingsCardStyles from "@/styles/components/settings/settingsCard.module.css";

interface settingsCard {
  iconSize?: number;
  url?: string;
  header?: string;
  description?: string;
}

export const SettingsCard = ({
  header,
  description,
  iconSize,
  url,
}: settingsCard) => {
  return (
    <ThemedContainer className={settingsCardStyles.cardContainer}>
      <Link href={url ?? ""}>
        <ThemedContainer className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-center">
          <ThemedContainer className="to-bg-black-10 absolute inset-0 h-full w-full"></ThemedContainer>
        </ThemedContainer>
        <ThemedContainer className="relative text-center p-6 px-6 py-14 md:px-12">
          <h2 className="mb-6 text-3xl font-medium  ">{header ?? ""}</h2>

          <h5 className="mb-4 text-lg font-semibold">{description ?? ""}</h5>
          <DisplaySettings
            style={{ fontSize: iconSize ?? 32 }}
            className="relative inline-block"
          />
        </ThemedContainer>{" "}
      </Link>
    </ThemedContainer>
  );
};
