from fastapi import APIRouter
import pandas as pd
import gdown
import os
from concurrent.futures import ThreadPoolExecutor
import asyncio
# import time

router = APIRouter()

def download_file(url, output):
    gdown.download(url, output, quiet=False)

@router.get("/load-data")
async def load_data_from_drive():
    file_id = "1-PL9R3FtiHdx8d89VEi0x5CH1oyE2A4c"
    url = f"https://drive.google.com/uc?id={file_id}&export=download"
    output = 'MERGE_ROBUST.csv' 
    # time.sleep(100)
  
    try:
        loop = asyncio.get_event_loop()
        with ThreadPoolExecutor() as pool:
            await loop.run_in_executor(pool, download_file, url, output)

        if os.path.exists(output):
            df = pd.read_csv(output)
            selected_columns = ['CATEGORIA_COMERCIAL', 'CATEGORIA_INDUSTRIAL', 'CATEGORIA_PUBLICA', 'CATEGORIA_RESIDENCIAL', 'CONS_MEDIDO', 'MATRICULA', 'REFERENCIA', 'FRAUDE']
            df_selected = df[selected_columns]

            return df_selected.to_dict(orient='records')
        else:
            return {"error": "File download failed or incomplete."}
    
    except Exception as e:
        return {"error": str(e)}
