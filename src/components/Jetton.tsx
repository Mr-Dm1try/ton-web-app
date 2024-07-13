import { Address } from "@ton/ton";
import { useTonConnect } from "../hooks/useTonConnect";
// import { useFaucetJettonContract } from "../hooks/useFaucetJettonContract";
import { useJettonContract } from "../hooks/useJettonContract";
import {
  Button,
  Card,
  Ellipsis,
  FlexBoxCol,
  FlexBoxRow,
} from "./styled/styled";

export function Jetton() {
  const { connected, wallet } = useTonConnect();
  // const { mint, jettonWalletAddress, balance } = useFaucetJettonContract();
  const { jettonWalletAddress, balance, mint } = useJettonContract();

  return (
    < Card title="Jetton">
      <FlexBoxCol>
        <h3>Jetton</h3>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{wallet ? Address.parse(wallet as string).toString() : "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Jetton Wallet
          <Ellipsis>{jettonWalletAddress ?? "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Balance
          <Ellipsis>{balance ?? "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <Button
          disabled={!connected}
          onClick={async () => {
            mint();
          }}
        >
          Mint Jettons
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
