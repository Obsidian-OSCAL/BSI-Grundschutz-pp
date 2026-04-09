---
tags: Security_by_Design_Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.2.6.1 Eingabevalidierung
parent_control: DEV.2.6 Widerstandsfähigkeit gegen gängige Angriffsmuster
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.2.6.1 - Eingabevalidierung
Tags: "[Security by Design](tags_Security by Design)" "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [DEV.2 Softwareentwicklung - Security by Design](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md)
---

** Übergeordnetes Control: ** [DEV.2.6 Widerstandsfähigkeit gegen gängige Angriffsmuster](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DEV.2.6%20Widerstandsfähigkeit%20gegen%20gängige%20Angriffsmuster.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Security by Design](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md) *** | Anwendungen | SOLLTE | Eingabedaten | auf eingeschleuste Befehle | testen | Freigabeplan | >Entwicklung für Anwendungen SOLLTE Eingabedaten auf eingeschleuste Befehle testen.

> [!info]- Guidance
>Bei der Eingabevalidierung (Input Validation) wird getestet, ob die Eingabedaten eingeschleuste Befehle enthalten, z.B. SQL-Injection, Kommandozeilenbefehle oder Prompt Injection bei generativer KI.   Welche Eingaben betroffen sein könnten, kann durch eine Taint Analyse herausgefunden werden. Alternativ können auch alle Eingabedaten validiert werden (Server Side Validation).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 467ae9d3-922b-44eb-9527-d617416e5330 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 467ae9d3-922b-44eb-9527-d617416e5330 |

> [!info]- Links> > related: [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1%20Eingabevalidierung.md)
