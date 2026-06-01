import{n as e,o as t}from"./CategoryHeading-Bl-aWo3M.js";import{n,r}from"./joinUrl-VAlgdsiA.js";import{t as i}from"./jsx-runtime-xAYjq6ji.js";import{t as a}from"./createLucideIcon-C-4hCYUB.js";import{c as o,o as s,s as c}from"./openapi-DOePkcJe.js";import{n as l,t as u}from"./Badge-C9C3IaJR.js";import{i as d,n as f,r as p,t as m}from"./Card-Bbja73DO.js";import{t as h}from"./lock-BF1XZI2W.js";import{t as g}from"./Button-B4bIxS7I.js";import{t as _}from"./Markdown-jk_JFk7h.js";import{n as v,r as y,t as b}from"./Popover-CWll6RXC.js";import{t as x}from"./slugify-B6U9ql8d.js";import{c as S,i as C,l as w,n as T,r as E,s as D,t as O}from"./Item-DokWl80E.js";import{t as k}from"./useWarmupSchema-pQWGZ6yQ.js";var A=a(`globe`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]),j=a(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),M=a(`tag`,[[`path`,{d:`M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z`,key:`vktsd0`}],[`circle`,{cx:`7.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`kqv944`}]]),N=a(`webhook`,[[`path`,{d:`M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2`,key:`q3hayz`}],[`path`,{d:`m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06`,key:`1go1hn`}],[`path`,{d:`m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8`,key:`qlwsc0`}]]),P=i(),F=c(`
  query SchemaInfo($input: JSON!, $type: SchemaType!) {
    schema(input: $input, type: $type) {
      servers {
        url
        description
      }
      license {
        name
        url
        identifier
      }
      termsOfService
      externalDocs {
        description
        url
      }
      contact {
        name
        url
        email
      }
      description
      summary
      title
      url
      version
      tags {
        name
        description
        extensions
      }
      components {
        securitySchemes {
          name
          type
          description
          in
          paramName
          scheme
          bearerFormat
          openIdConnectUrl
          flows {
            implicit {
              authorizationUrl
              scopes {
                name
                description
              }
            }
            password {
              tokenUrl
              scopes {
                name
                description
              }
            }
            clientCredentials {
              tokenUrl
              scopes {
                name
                description
              }
            }
            authorizationCode {
              authorizationUrl
              tokenUrl
              scopes {
                name
                description
              }
            }
          }
        }
      }
      webhooks {
        name
        method
        summary
        description
      }
    }
  }
`),I=({href:e,icon:t,children:n})=>(0,P.jsxs)(`a`,{href:e,className:`inline-flex items-center gap-2 opacity-65 hover:opacity-100 [&_svg]:shrink-0 [&_svg]:size-3.5`,target:`_blank`,rel:`noopener noreferrer`,children:[t,(0,P.jsx)(`span`,{className:`truncate grow-0`,children:n})]}),L=({schema:t})=>{let n=!!(t.license||t.termsOfService||t.externalDocs),r=!!(t.contact?.name||t.contact?.email||t.contact?.url),i=t.servers.length>0;return(0,P.jsxs)(f,{className:`flex flex-col gap-3 text-sm`,children:[n&&(0,P.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[t.license&&(0,P.jsx)(I,{href:t.license.url??void 0,children:t.license.name}),t.termsOfService&&(0,P.jsx)(I,{href:t.termsOfService,children:`Terms of Service`}),t.externalDocs&&(0,P.jsx)(I,{href:t.externalDocs.url,children:t.externalDocs.description??`Documentation`})]}),n&&(r||i)&&(0,P.jsx)(e,{}),r&&(0,P.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,P.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Contact`}),t.contact?.name&&(0,P.jsx)(`span`,{children:t.contact.name}),t.contact?.email&&(0,P.jsx)(I,{href:`mailto:${t.contact.email}`,icon:(0,P.jsx)(j,{}),children:t.contact.email}),t.contact?.url&&(0,P.jsx)(I,{href:t.contact.url,icon:(0,P.jsx)(A,{}),children:t.contact.url})]}),r&&i&&(0,P.jsx)(e,{}),i&&(0,P.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[(0,P.jsx)(`span`,{className:`text-xs text-muted-foreground font-medium uppercase tracking-wide`,children:`Servers`}),t.servers.map(e=>(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`code`,{className:`text-xs select-all break-all`,children:e.url}),e.description&&(0,P.jsx)(`p`,{className:`text-muted-foreground text-xs`,children:e.description})]},e.url))]})]})},R=e=>{switch(e){case`apiKey`:return(0,P.jsx)(d,{size:14});case`http`:return(0,P.jsx)(h,{size:14});case`oauth2`:return(0,P.jsx)(p,{size:14});case`openIdConnect`:return(0,P.jsx)(p,{size:14});case`mutualTLS`:return(0,P.jsx)(h,{size:14})}},z=e=>{switch(e.type){case`apiKey`:return`API Key in ${e.in??`header`} (${e.paramName??`key`})`;case`http`:return e.scheme===`bearer`?`Bearer token${e.bearerFormat?` (${e.bearerFormat})`:``}`:`HTTP ${e.scheme??`authentication`}`;case`oauth2`:return`OAuth 2.0 authorization`;case`openIdConnect`:return`OpenID Connect`;case`mutualTLS`:return`Mutual TLS authentication`}},B=()=>{let{input:e,type:i,options:a}=s(),{data:{schema:c}}=n(o(F,{input:e,type:i})),{title:d,description:f}=c;k();let p=!!(c.contact?.name||c.contact?.email||c.contact?.url||c.servers.length>0||c.license||c.termsOfService||c.externalDocs),A=c.tags.flatMap(({name:e,description:t,extensions:n})=>e?{name:e,description:t,extensions:n}:[]);return(0,P.jsxs)(`div`,{className:`pt-(--padding-content-top)`,"data-pagefind-filter":`section:openapi`,"data-pagefind-meta":`section:openapi`,children:[(0,P.jsx)(w,{name:`category`,children:d}),(0,P.jsxs)(t,{children:[d&&(0,P.jsx)(`title`,{children:d}),f&&(0,P.jsx)(`meta`,{name:`description`,content:f})]}),(0,P.jsxs)(`div`,{className:`mb-8 flex flex-col gap-4`,children:[(0,P.jsx)(S,{heading:d,headingId:`description`}),(0,P.jsxs)(`div`,{className:`grid grid-cols-1 xl:grid-cols-[1fr_minmax(250px,380px)] gap-8`,children:[p&&(0,P.jsx)(`div`,{className:`xl:hidden sticky top-(--top-nav-height) lg:top-(--scroll-padding) z-10 row-start-1 col-start-1 justify-self-end self-start`,children:(0,P.jsxs)(b,{children:[(0,P.jsx)(y,{asChild:!0,children:(0,P.jsx)(g,{variant:`outline`,size:`icon`,className:`shadow-sm rounded-full`,children:(0,P.jsx)(l,{})})}),(0,P.jsx)(v,{align:`end`,className:`xl:hidden w-full max-w-full md:max-w-sm`,children:(0,P.jsx)(L,{schema:c})})]})}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-6 row-start-1 col-start-1`,children:[c.summary&&(0,P.jsx)(`p`,{className:`text-lg text-muted-foreground`,children:c.summary}),c.description&&(0,P.jsx)(_,{className:`prose-img:max-w-prose prose-sm max-w-full lg:max-w-2xl`,content:c.description}),A.length>0&&(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,P.jsx)(M,{size:14}),`Tags`]}),(0,P.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:A.map(e=>(0,P.jsx)(O,{variant:`outline`,asChild:!0,children:(0,P.jsx)(r,{to:x(e.name),children:(0,P.jsxs)(E,{children:[(0,P.jsx)(D,{children:e.extensions?.[`x-displayName`]??e.name}),e.description&&(0,P.jsx)(C,{asChild:!0,children:(0,P.jsx)(_,{components:{p:({children:e})=>e,a:e=>(0,P.jsx)(`span`,{...e})},content:e.description,className:`prose-sm text-pretty`})})]})})},e.name))})]}),!a?.disableSecurity&&(c.components?.securitySchemes?.length??0)>0&&(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,P.jsx)(h,{size:14}),`Security Schemes`]}),(0,P.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:c.components?.securitySchemes?.map(e=>(0,P.jsxs)(O,{variant:`outline`,children:[(0,P.jsxs)(E,{children:[(0,P.jsxs)(D,{className:`flex items-center gap-2`,children:[R(e.type),e.name]}),(0,P.jsx)(C,{asChild:!0,children:(0,P.jsx)(_,{content:e.description??z(e),className:`prose-sm text-pretty`,components:{p:({children:e})=>e,a:e=>(0,P.jsx)(`span`,{...e})}})})]}),(0,P.jsx)(T,{children:(0,P.jsx)(u,{variant:`muted`,className:`text-[10px] font-mono`,children:e.type})})]},e.name))})]}),c.webhooks.length>0&&(0,P.jsxs)(`div`,{children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4`,children:[(0,P.jsx)(N,{size:14}),`Webhooks`]}),(0,P.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:c.webhooks.map(e=>(0,P.jsxs)(O,{variant:`outline`,children:[(0,P.jsxs)(E,{children:[(0,P.jsx)(D,{children:e.name}),(e.summary||e.description)&&(0,P.jsx)(C,{children:e.summary??e.description})]}),(0,P.jsx)(T,{children:(0,P.jsx)(u,{variant:`muted`,className:`text-[10px] font-mono`,children:e.method})})]},`${e.name}-${e.method}`))})]})]}),p&&(0,P.jsx)(`div`,{className:`hidden xl:block`,children:(0,P.jsx)(m,{className:`sticky top-(--scroll-padding)`,children:(0,P.jsx)(L,{schema:c})})})]})]})]})};export{B as SchemaInfo};
//# sourceMappingURL=SchemaInfo-CbLinQei.js.map