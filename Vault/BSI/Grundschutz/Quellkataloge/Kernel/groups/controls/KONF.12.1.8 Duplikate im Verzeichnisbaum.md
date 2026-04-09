---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.8 Duplikate im Verzeichnisbaum
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.8 - Duplikate im Verzeichnisbaum
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Verzeichnisdienste | SOLLTE | Duplikate im Verzeichnisbaum |  | blockieren | Konfigurationshistorie | >Konfiguration für Verzeichnisdienste SOLLTE Duplikate im Verzeichnisbaum blockieren.

> [!info]- Guidance
>Da jedes Zugangskonto nur einmal benötigt wird können Duplikate von Attributen wie Name oder Organisationseinheit nur als Fehler oder Angriff vorkommen. In OpenLDAP kann dies beispielsweise durch Overlays realisiert werden. Dies gilt ausschließlich für Daten von Nutzenden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c9194ad7-5382-4810-a5b9-d4013a28f5a5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | c9194ad7-5382-4810-a5b9-d4013a28f5a5 |
