export default function BotonMasRapida({ onClick }) {
    return (
        <button
            type="submit"
            className="btn btn-info ms-2"
            id="btn-fast"
            onClick={onClick}
        >
            Mas rapida
        </button>
    )
}