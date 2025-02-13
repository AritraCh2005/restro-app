export default function SectionHeaders({subHeader,mainHeader}) {
    return (
        <div className="">
                <div className="text-center mb-4">
                  <h3 className="uppercase text-gray-800 font-bold">{subHeader}</h3>
                  <h2 className="text-yellow-400 font-bold text-4xl font-serif">{mainHeader}</h2>
                </div>
        </div>
    );
}