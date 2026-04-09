---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.7 Filtern schädlicher Webinhalte
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.7 - Filtern schädlicher Webinhalte
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Webanwendungen | SOLLTE | eine Filterung schädlicher Webinhalte |  | aktivieren | Konfigurationshistorie | >Konfiguration für Webanwendungen SOLLTE eine Filterung schädlicher Webinhalte aktivieren.

> [!info]- Guidance
>Anfragen an Webanwendungen könnten dazu führen, dass diese sich anders verhalten als gewollt. Mögliche Folgen sind die unzulässige Preisgabe von Informationen, die Manipulation oder der Verlust von Daten sowie Betriebsstörungen. Typische Auslöser sind SQL Injection oder Cross-Site-Scripting. Solche potenziell schädlich wirkenden Inhalte können durch eine Web Application Firewall oder durch geeignete Eingabevalidierung in der Webanwendung gefiltert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 568f6977-4f5c-44a4-92c7-1e6e09cc3631 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 568f6977-4f5c-44a4-92c7-1e6e09cc3631 |

> [!info]- Links> > related: [ARCH.5.1.10 Webfilterung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.5.1.10%20Webfilterung.md)
