import TitlePage from "../../../TitlePage/TitlePage";
import trouble1 from '../../../../assets/trouble1.png'
import trouble2 from '../../../../assets/trouble2.png'
import trouble3 from '../../../../assets/trouble3.png'
import trouble4 from '../../../../assets/trouble4.png'

const ChildrenTrouble = () => {
    return (
        <section className="mt-5">
            <TitlePage/>
            <div className="grid mt-8 grid-cols-12 gap-4 max-w-5xl h-[673px] mx-auto px-2 lg:px-0">
                <div style={{backgroundImage: `url(${trouble1})`}} className="h-ful md:col-span-8 col-span-6 bg-cover bg-center bg-no-repeat rounded-lg">
                   
                </div>
                <div style={{backgroundImage: `url(${trouble2})`}} className="h-ful md:col-span-4 col-span-6 bg-cover bg-center bg-no-repeat rounded-lg">
                   
                </div>
                <div style={{backgroundImage: `url(${trouble3})`}} className="h-ful md:col-span-5 col-span-12 bg-cover bg-center bg-no-repeat rounded-lg">
                   
                </div>
                <div style={{backgroundImage: `url(${trouble4})`}} className="h-ful md:col-span-7 col-span-12 bg-cover bg-center bg-no-repeat rounded-lg">
                </div>
            </div>
        </section>
    );
};

export default ChildrenTrouble;