import { Button } from "../components/Button";

interface HomeProps {
    onOpenModal: () => void;
}

export function Home({ onOpenModal }: HomeProps) {
    return (
        <Button type="button" onClick={onOpenModal}>
            Abrir modal
        </Button>
    );
}