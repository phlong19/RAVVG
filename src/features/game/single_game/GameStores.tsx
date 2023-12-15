import DynamicSiIcon from "../../../ui/DynamicSiIcon";
import { Store } from "../../../utils/model";

function GameStores({ stores }: { stores: Store[] }) {
  return (
    <div className="mt-6 w-full overflow-x-auto lg:mt-8 lg:overflow-visible">
      <h2 className="text-lg text-white/40">Available on</h2>
      <div className="flex cursor-pointer flex-nowrap gap-2 overflow-x-auto lg:flex-wrap">
        {stores.map((s, i) => (
          <button
            key={i}
            className="mt-2 flex h-10 w-[184px] min-w-[150px] items-center justify-center rounded-md bg-white/10 text-sm text-white/50 transition-all duration-300 hover:bg-white hover:text-black"
          >
            {s.store.name}
            <span className="ml-2 text-2xl">
              <DynamicSiIcon name={s.store.name} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GameStores;
