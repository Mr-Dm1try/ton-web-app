import { beginCell, toNano, Address, Cell, fromNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { useFaucetJettonContract } from "../hooks/useFaucetJettonContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";
import { useJettonContract } from "../hooks/useJettonContract";

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
