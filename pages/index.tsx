import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactCompareSlider } from "react-compare-slider";
import jeepBefore from "../public/images/jeep/jeepBefore.jpg";
import jeepAfter from "../public/images/jeep/jeepAfter.jpg";
import escaladeWheelBefore from "../public/images/escaladeWheel/escaladeWheelBefore.jpg";
import escaladeWheelAfter from "../public/images/escaladeWheel/escaladeWheelAfter.jpg";
import atsBefore from "../public/images/ats/atsBefore.jpg";
import atsAfter from "../public/images/ats/atsAfter.jpg";
import tahoeBefore from "../public/images/tahoe/tahoeBefore.jpg";
import tahoeAfter from "../public/images/tahoe/tahoeAfter.jpg";
import denaliBefore from "../public/images/denali/denaliBefore.jpg";
import denaliAfter from "../public/images/denali/denaliAfter.jpg";
import buick1Before from "../public/images/buick1/buickBefore1.jpg";
import buick1After from "../public/images/buick1/buickAfter1.jpg";
import silveradoBefore from "../public/images/silverado/silveradoBefore.jpg";
import silveradoAfter from "../public/images/silverado/silveradoAfter.jpg";
import blueAtsvBefore from "../public/images/blueAtsv/blueAtsBefore.jpg";
import blueAtsvAfter from "../public/images/blueAtsv/blueAtsAfter.jpg";
import atsvBefore from "../public/images/atsv/atsvBefore.jpg";
import atsvAfter from "../public/images/atsv/atsvAfter.jpg";
import encoreBefore from "../public/images/encore/encoreBefore.jpg";
import encoreAfter from "../public/images/encore/encoreAfter.jpg";
import chevyVanBefore1 from "../public/images/chevyVan1/chevyVanBefore1.jpg";
import chevyVanAfter1 from "../public/images/chevyVan1/chevyVanAfter1.jpg";
import pandoraBefore1 from "../public/images/pandora1/pandoraBefore1.jpg";
import pandoraAfter1 from "../public/images/pandora1/pandoraAfter1.jpg";
import pandoraBefore2 from "../public/images/pandora2/pandoraBefore2.jpg";
import pandoraAfter2 from "../public/images/pandora2/pandoraAfter2.jpg";
import chevyVanBefore2 from "../public/images/chevyVan2/chevyVanBefore2.jpg";
import chevyVanAfter2 from "../public/images/chevyVan2/chevyVanAfter2.jpg";
import acdelcoBefore from "../public/images/acdelco/acDelcoBefore.jpg";
import acdelcoAfter from "../public/images/acdelco/acDelcoAfter.jpg";
import buickBefore2 from "../public/images/buick2/buickBefore2.jpg";
import buickAfter2 from "../public/images/buick2/buickAfter2.jpg";
import escaladeGrilleAfter from "../public/images/escaladeGrille/escaladeGrilleAfter.jpg";
import escaladeGrilleBefore from "../public/images/escaladeGrille/escaladeGrilleBefore.jpg";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white py-2 dark:bg-gray-900">
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className="flex w-full flex-1 flex-col justify-center p-4">
        <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-400 md:text-3xl">
          {`Megan Elshoff `}
          <a
            className="text-blue-500 dark:text-blue-300"
            href="https://nextjs.org"
          >
            Retouching
          </a>
        </h1>
        <hr className="mt-4 h-1 border-none bg-slate-300 dark:bg-slate-700" />
        <section className="my-8 grid gap-8 text-center text-gray-900 dark:text-gray-50 md:my-16 md:gap-16">
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Jeep Cherokee</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={jeepBefore} />}
              itemTwo={<Image alt="cadillac after" src={jeepAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">
              Cadillac Escalade
            </p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={
                <Image alt="cadillac before" src={escaladeWheelBefore} />
              }
              itemTwo={<Image alt="cadillac after" src={escaladeWheelAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Cadillac ATS</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={atsBefore} />}
              itemTwo={<Image alt="cadillac after" src={atsAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Chevy Tahoe</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={tahoeBefore} />}
              itemTwo={<Image alt="cadillac after" src={tahoeAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">GMC Denali</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={denaliBefore} />}
              itemTwo={<Image alt="cadillac after" src={denaliAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Buick</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={buick1Before} />}
              itemTwo={<Image alt="cadillac after" src={buick1After} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">
              Chevy Silverado
            </p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={silveradoBefore} />}
              itemTwo={<Image alt="cadillac after" src={silveradoAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Cadillac ATS-V</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={blueAtsvBefore} />}
              itemTwo={<Image alt="cadillac after" src={blueAtsvAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Cadillac ATS-V</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={atsvBefore} />}
              itemTwo={<Image alt="cadillac after" src={atsvAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Buick Encore</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={encoreBefore} />}
              itemTwo={<Image alt="cadillac after" src={encoreAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Chevy</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={chevyVanBefore1} />}
              itemTwo={<Image alt="cadillac after" src={chevyVanAfter1} />}
            />
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <p className="mb-4 text-lg font-bold md:text-2xl">
                Pandora Jewelry
              </p>
              <ReactCompareSlider
                className="image-slider rounded-2xl shadow-2xl"
                itemOne={<Image alt="cadillac before" src={pandoraBefore1} />}
                itemTwo={<Image alt="cadillac after" src={pandoraAfter1} />}
              />
            </div>
            <div>
              <p className="mb-4 text-lg font-bold md:text-2xl">
                Pandora Jewelry
              </p>
              <ReactCompareSlider
                className="image-slider rounded-2xl shadow-2xl"
                itemOne={<Image alt="cadillac before" src={pandoraBefore2} />}
                itemTwo={<Image alt="cadillac after" src={pandoraAfter2} />}
              />
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Chevy</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={chevyVanBefore2} />}
              itemTwo={<Image alt="cadillac after" src={chevyVanAfter2} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">AC Delco</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={acdelcoBefore} />}
              itemTwo={<Image alt="cadillac after" src={acdelcoAfter} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">Buick</p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={<Image alt="cadillac before" src={buickBefore2} />}
              itemTwo={<Image alt="cadillac after" src={buickAfter2} />}
            />
          </div>
          <div>
            <p className="mb-4 text-lg font-bold md:text-2xl">
              Cadillac Escalade
            </p>
            <ReactCompareSlider
              className="image-slider rounded-2xl shadow-2xl"
              itemOne={
                <Image alt="cadillac before" src={escaladeGrilleBefore} />
              }
              itemTwo={<Image alt="cadillac after" src={escaladeGrilleAfter} />}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
