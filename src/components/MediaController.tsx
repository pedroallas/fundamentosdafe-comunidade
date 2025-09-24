import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Monitor, Headphones, Volume2 } from "lucide-react";

interface MediaControllerProps {
  title: string;
  videoUrl: string;
}

export const MediaController: React.FC<MediaControllerProps> = ({ title, videoUrl }) => {
  const [playbackMode, setPlaybackMode] = useState<"video" | "audio">("video");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-[#2D3748]">
            {playbackMode === "video" ? (
              <>
                <Monitor className="w-5 h-5" />
                Vídeo da Lição
              </>
            ) : (
              <>
                <Headphones className="w-5 h-5" />
                Áudio da Lição
              </>
            )}
          </CardTitle>

          {/* Mode Toggle Buttons */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <Button
              variant={playbackMode === "video" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPlaybackMode("video")}
              className={`px-3 py-1 text-xs transition-all duration-200 ${
                playbackMode === "video"
                  ? "bg-[#2C5282] text-white shadow-sm"
                  : "text-gray-600 hover:bg-white hover:text-[#2C5282]"
              }`}
            >
              <Monitor className="w-3 h-3 mr-1" />
              Vídeo
            </Button>
            <Button
              variant={playbackMode === "audio" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPlaybackMode("audio")}
              className={`px-3 py-1 text-xs transition-all duration-200 ${
                playbackMode === "audio"
                  ? "bg-[#2C5282] text-white shadow-sm"
                  : "text-gray-600 hover:bg-white hover:text-[#2C5282]"
              }`}
            >
              <Volume2 className="w-3 h-3 mr-1" />
              Áudio
            </Button>
          </div>
        </div>
        <CardDescription className="text-gray-600">
          {playbackMode === "video"
            ? "Assista ao conteúdo completo da lição"
            : "Ouça apenas o áudio da lição (mesmo conteúdo do vídeo)"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="relative">
          {/* Video Container */}
          <div
            className={`relative transition-all duration-300 ${
              playbackMode === "video"
                ? "aspect-video bg-gray-900 rounded-lg overflow-hidden"
                : "h-0 overflow-hidden"
            }`}
          >
            {playbackMode === "video" ? (
              <div className="absolute inset-0 bg-gray-900 rounded-lg flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/9CqwnIDoD5s?rel=0&modestbranding=1&showinfo=0&autoplay=0"
                  title={`Vídeo da Lição - ${title}`}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ) : (
              <div className="hidden">
                <iframe
                  src="https://www.youtube.com/embed/9CqwnIDoD5s?rel=0&modestbranding=1&showinfo=0&autoplay=0"
                  title={`Áudio da Lição - ${title}`}
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media"
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>

          {/* Audio-Only Mode Display */}
          {playbackMode === "audio" && (
            <div className="bg-[#2C5282] rounded-lg p-6 text-white text-center">
              <div className="mb-3">
                <Headphones className="w-8 h-8 mx-auto mb-2" />
              </div>
              <h3 className="mb-2">Modo Áudio Ativo</h3>
              <p className="text-sm opacity-90 mb-3">
                O vídeo continua tocando em segundo plano.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs opacity-75">
                <Volume2 className="w-3 h-3" />
                <span>Reprodução contínua</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};