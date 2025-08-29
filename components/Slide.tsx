
import React, { useState } from 'react';
import type { SlideData, TableRow, TimelinePhase, VennItem, SlideContent } from '../types';
import { GearsIcon, LotusIcon, ChartIcon, UAEFlagIcon, BrainCircuitIcon, EditIcon } from './IconComponents';

interface SlideProps {
  data: SlideData;
  onUpdate: (newKeyContent: SlideContent) => void;
}

const DataEditor: React.FC<{
    content: { type: 'table'; data: TableRow[] } | { type: 'timeline'; data: TimelinePhase[] } | { type: 'venn'; items: VennItem[] };
    onSave: (newContent: SlideContent) => void;
    onCancel: () => void;
}> = ({ content, onSave, onCancel }) => {
    const initialData = 'data' in content ? content.data : content.items;
    const [editorContent, setEditorContent] = useState(JSON.stringify(initialData, null, 2));
    const [error, setError] = useState('');

    const handleSave = () => {
        try {
            const parsedData = JSON.parse(editorContent);
            const newKeyContent = { ...content };
            if ('data' in newKeyContent) {
                newKeyContent.data = parsedData as TableRow[];
            } else if ('items' in newKeyContent) {
                newKeyContent.items = parsedData as VennItem[];
            }
            onSave(newKeyContent);
        } catch (e) {
            setError('Invalid JSON format. Please check your data.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="editor-title">
            <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[90vh]">
                <header className="p-4 border-b border-slate-700 flex justify-between items-center flex-shrink-0">
                    <h3 id="editor-title" className="text-lg font-semibold text-slate-200">Edit Slide Data</h3>
                    <button onClick={onCancel} className="text-slate-400 hover:text-white text-2xl leading-none" aria-label="Close editor">&times;</button>
                </header>
                <div className="p-4 flex-grow overflow-y-auto">
                    <textarea
                        className="w-full h-96 bg-slate-900 border border-slate-600 rounded-md p-3 font-mono text-sm text-slate-300 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                        value={editorContent}
                        onChange={(e) => {
                            setEditorContent(e.target.value);
                            if (error) setError('');
                        }}
                        aria-label="JSON data editor"
                    ></textarea>
                    {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
                </div>
                <footer className="p-4 bg-slate-800/50 border-t border-slate-700 flex justify-end gap-3 flex-shrink-0">
                    <button onClick={onCancel} className="px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-500 text-white transition-colors">Cancel</button>
                    <button onClick={handleSave} className="px-4 py-2 rounded-md bg-sky-600 hover:bg-sky-500 text-white font-semibold transition-colors">Save Changes</button>
                </footer>
            </div>
        </div>
    );
};


const renderContent = (data: SlideData) => {
  const { slideNumber, keyContent } = data;

  if (Array.isArray(keyContent)) {
    return (
      <ul className="space-y-4 max-w-4xl">
        {keyContent.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-sky-400 text-2xl mr-4 mt-1">▸</span>
            <span className="text-slate-300 text-xl">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  switch (keyContent.type) {
    case 'table':
      return <ComparisonTable data={keyContent.data} />;
    case 'timeline':
      return <Timeline data={keyContent.data} />;
    case 'venn':
        return <VennDiagram items={keyContent.items} />;
    case 'custom':
      switch (slideNumber) {
        case 1:
          return <div className="text-center"><UAEFlagIcon /><p className="mt-8 text-xl text-slate-400">{data.presenter}</p></div>;
        case 11:
            return <div className="flex flex-col items-center justify-center text-center"><p className="text-2xl text-slate-300 whitespace-pre-line">{data.subtitle}</p><LotusIcon className="mt-8 text-slate-600 w-24 h-24"/></div>;
        default:
          return null;
      }
    default:
      return null;
  }
};

const SlideDecorator: React.FC<{ slideNumber: number }> = ({ slideNumber }) => {
    switch(slideNumber) {
        case 2: return <div className="absolute right-16 top-1/2 -translate-y-1/2"><GearsIcon className="w-48 h-48 text-slate-700/50" /></div>;
        case 3: return <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-2 p-4 opacity-30">
            <img src="https://picsum.photos/seed/class/300/200" className="rounded-lg" alt="classroom"/>
            <img src="https://picsum.photos/seed/kids/300/200" className="rounded-lg" alt="children"/>
        </div>
        case 4: return <div className="absolute right-16 top-1/2 -translate-y-1/2"><ChartIcon className="w-48 h-48 text-slate-700/50" /></div>;
        case 5: return <div className="absolute bottom-1/2 translate-y-1/2 right-16 grid grid-cols-2 gap-2 p-4 opacity-30 w-1/3">
             <img src="https://picsum.photos/seed/skyline/200/150" className="rounded-lg col-span-2" alt="skyline"/>
             <img src="https://picsum.photos/seed/ai/200/150" className="rounded-lg" alt="ai"/>
             <img src="https://picsum.photos/seed/map/200/150" className="rounded-lg" alt="map"/>
        </div>
        case 6: return <div className="absolute bottom-1/2 translate-y-1/2 right-16 grid grid-cols-2 gap-2 p-4 opacity-30 w-1/3">
            <img src="https://picsum.photos/seed/lab/200/150" className="rounded-lg" alt="lab"/>
            <img src="https://picsum.photos/seed/tablet/200/150" className="rounded-lg" alt="tablet"/>
            <img src="https://picsum.photos/seed/music/200/150" className="rounded-lg" alt="music"/>
            <img src="https://picsum.photos/seed/sports/200/150" className="rounded-lg" alt="sports"/>
        </div>
        case 10: return <div className="absolute bottom-16 right-16 w-64 h-40 opacity-50"><img src="https://picsum.photos/seed/future/400/300" className="rounded-lg object-cover w-full h-full" alt="children looking to future" /><BrainCircuitIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-sky-300/50" /></div>;
        default: return null;
    }
}

const Slide: React.FC<SlideProps> = ({ data, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const isEditable = typeof data.keyContent === 'object' 
      && data.keyContent !== null 
      && 'type' in data.keyContent 
      && ['table', 'timeline', 'venn'].includes(data.keyContent.type);

  return (
    <div key={data.slideNumber} className="w-full h-full flex flex-col justify-center animate-fade-in">
        {isEditing && isEditable && (
            <DataEditor
                content={data.keyContent as any}
                onSave={(newContent) => {
                    onUpdate(newContent);
                    setIsEditing(false);
                }}
                onCancel={() => setIsEditing(false)}
            />
        )}
        <div className="relative w-full flex-grow flex flex-col justify-center">
            {isEditable && (
                <button 
                    onClick={() => setIsEditing(true)} 
                    className="absolute top-0 right-0 p-2 text-slate-500 hover:text-sky-400 transition-colors z-20"
                    aria-label="Edit slide data"
                >
                    <EditIcon className="w-6 h-6" />
                </button>
            )}

            <h1 className={`font-bold leading-tight tracking-tight text-slate-100 ${data.slideNumber === 1 ? 'text-7xl text-center' : 'text-4xl'}`}>{data.title}</h1>
            {data.subtitle && <h2 className={`mt-4 text-slate-400 ${data.slideNumber === 1 ? 'text-3xl text-center' : 'text-2xl'}`}>{data.subtitle}</h2>}
            
            <div className="mt-10 flex-grow">
              {renderContent(data)}
            </div>

            <SlideDecorator slideNumber={data.slideNumber} />
        </div>
    </div>
  );
};

const ComparisonTable: React.FC<{ data: TableRow[] }> = ({ data }) => {
    return (
        <div className="w-full text-left text-sm">
            <div className="grid grid-cols-4 gap-4 pb-2 border-b border-slate-600 font-bold text-slate-400">
                <div>Metric</div>
                <div>Public</div>
                <div>Private</div>
                <div className="text-sky-400">Proposed PPP Model</div>
            </div>
            <div className="space-y-2 mt-2">
                {data.map((row) => (
                    <div key={row.metric} className="grid grid-cols-4 gap-4 py-2 border-b border-slate-800 items-center">
                        <div className="font-semibold text-slate-300">{row.metric}</div>
                        <div className="text-slate-400 bg-slate-700/30 p-2 rounded-md">{row.public}</div>
                        <div className="text-slate-400 bg-slate-700/30 p-2 rounded-md">{row.private}</div>
                        <div className="text-sky-300 font-bold bg-sky-900/40 p-2 rounded-md">{row.proposed}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Timeline: React.FC<{data: TimelinePhase[]}> = ({data}) => {
    return (
        <div className="flex justify-between items-start mt-12 w-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-slate-700"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2/3 h-0.5 bg-sky-500"></div>

            {data.map((phase, index) => (
                <div key={index} className="flex flex-col items-center text-center w-1/4 z-10">
                    <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-sky-500 flex items-center justify-center font-bold text-2xl text-sky-400 mb-4">{phase.phase}</div>
                    <h3 className="font-bold text-xl text-slate-100 mb-2">{phase.title}</h3>
                    <p className="text-slate-400 text-sm max-w-xs">{phase.description}</p>
                </div>
            ))}
        </div>
    )
}

const VennDiagram: React.FC<{ items: VennItem[] }> = ({ items }) => {
    const positions = [
        'top-0 left-1/4',
        'top-1/4 left-0',
        'top-1/4 right-0' 
    ];
    return (
        <div className="w-full flex justify-center items-center h-[400px]">
            <div className="relative w-96 h-96">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-700/50 rounded-full flex items-center justify-center text-center p-4">
                    <span className="font-bold text-xl text-sky-300">World-Class Free Education</span>
                </div>
                 <div className={`absolute top-0 left-1/4 w-48 h-48 ${items[0].color} rounded-full mix-blend-lighten opacity-80 flex items-center justify-center text-center p-2`}>
                    <span className="font-semibold text-white">{items[0].name}</span>
                </div>
                 <div className={`absolute top-1/3 left-0 w-48 h-48 ${items[1].color} rounded-full mix-blend-lighten opacity-80 flex items-center justify-center text-center p-2`}>
                     <span className="font-semibold text-white">{items[1].name}</span>
                </div>
                 <div className={`absolute top-1/3 right-0 w-48 h-48 ${items[2].color} rounded-full mix-blend-lighten opacity-80 flex items-center justify-center text-center p-2`}>
                     <span className="font-semibold text-white">{items[2].name}</span>
                </div>
            </div>
        </div>
    );
};


export default Slide;
