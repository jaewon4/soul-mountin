
import { GoogleGenAI, Type } from "@google/genai";
import { Mountain } from '../types';

const fetchSeoulMountains = async (): Promise<Mountain[]> => {
  try {
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "한국 서울에 있는 유명한 산 5곳을 추천해줘. 각 산에 대해 한국어 이름, 영어 이름, 1-2 문장으로 된 간단하고 매력적인 설명, 그리고 미터 단위의 높이를 포함한 JSON 형식으로 응답해줘.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name_ko: {
                type: Type.STRING,
                description: "산의 한국어 이름",
              },
              name_en: {
                type: Type.STRING,
                description: "산의 영어 이름",
              },
              description: {
                type: Type.STRING,
                description: "산에 대한 간단하고 매력적인 설명",
              },
              height_meters: {
                type: Type.INTEGER,
                description: "산의 높이 (미터 단위)",
              },
            },
            required: ["name_ko", "name_en", "description", "height_meters"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const data = JSON.parse(jsonText);
    return data as Mountain[];

  } catch (error) {
    console.error("Error fetching mountain data from Gemini API:", error);
    throw new Error("산 정보를 불러오는 데 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
};

export { fetchSeoulMountains };
