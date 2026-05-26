import PageHeader from "../components/PageHeader";

export default function FiturXyz() {
    return (
        <div>
            <PageHeader
                title="Fitur Xyz"
                breadcrumb={["Dashboard", "Fitur Xyz"]}
            />
            <h1>Ini halaman FiturXyz</h1>
        </div>
    );
}