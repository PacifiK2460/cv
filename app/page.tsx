'use client';

import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import {Snippet} from "@nextui-org/react";

import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Toaster, toast } from 'sonner'


export default function Home() {
  return (
    <div classname="h-full">
      <Toaster position="bottom-right"/>
      <div className="grid h-full place-items-center">
      <Card
      isBlurred
      shadow="sm"
      >

        <CardBody>

          <h1 className={title()}>Bajo Construcción</h1>
          <br />
          <h2 className={title()}>
          Vuelve pronto para contemplar todo mi trabajo.
          </h2>
          <h3 className={subtitle({ class: "mt-4 italic" })}>
          Martinez Lara Santiago de la cruz.
          </h3>
          <Snippet
            variant="bordered"
            tooltipProps={{
            color: "foreground",
            content: "Copiar mi dirección de correo electronico",
            // disableAnimation: true,
            placement: "top",
            closeDelay: 0
            }}
            symbol = {
              <EnvelopeIcon className="h-4 w-4" />
            }
            // Run toaster onCopy
            onCopy = {() => {
              toast.message('Correo Electronico copiado', {
                description: 'Prueba a mandarme uno 😉',
              })
            }}
            >
            me@santiago-lara.dev
          </Snippet>
        </CardBody>
      </Card>
    </div>
    </div>
  );
}
