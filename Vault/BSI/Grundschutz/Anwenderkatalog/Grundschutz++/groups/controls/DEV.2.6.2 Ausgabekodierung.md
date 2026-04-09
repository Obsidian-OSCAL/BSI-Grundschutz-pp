---
tags: Security_by_Design_Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.2.6.2 Ausgabekodierung
parent_control: DEV.2.6 Widerstandsfähigkeit gegen gängige Angriffsmuster
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.2.6.2 - Ausgabekodierung
Tags: "[Security by Design](tags_Security by Design)" "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [DEV.2 Softwareentwicklung - Security by Design](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md)
---

** Übergeordnetes Control: ** [DEV.2.6 Widerstandsfähigkeit gegen gängige Angriffsmuster](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DEV.2.6%20Widerstandsfähigkeit%20gegen%20gängige%20Angriffsmuster.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Security by Design](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md) *** | Anwendungen | SOLLTE | eine Ausgabekodierung |  | ausführen | Freigabeplan | >Entwicklung für Anwendungen SOLLTE eine Ausgabekodierung ausführen.

> [!info]- Guidance
>Ausgabekodierung (Output Encoding) ist wichtig, da sie spezielle Zeichen neutralisiert und so Angriffe wie Cross-Site Scripting (XSS) oder HTML-Injektionen verhindert, die ansonsten Schadcode ausführen könnten. Empfehlenswert ist kontextabhängiges Encoding und Escaping, basierend auf standardisierten Frameworks wie OWASP ESAPI.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | dee85b12-b7f9-445e-802a-bbe13d67538e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | dee85b12-b7f9-445e-802a-bbe13d67538e |
