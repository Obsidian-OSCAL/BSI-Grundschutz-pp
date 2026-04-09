---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.14 DNS-Falschinformationen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.14 - DNS-Falschinformationen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | DNS-Server | SOLLTE | DNS-Antworten, die falsche Domain-Informationen liefern, |  | deaktivieren | Konfigurationshistorie | >Konfiguration für DNS-Server SOLLTE DNS-Antworten, die falsche Domain-Informationen liefern, deaktivieren.

> [!info]- Guidance
>Falsch sind Domain-Informationen, wenn sie nicht der tatsächlichen Erreichbarkeit des Zieles entsprechen, sondern z.B. auf Werbeseiten umleiten. DNS-Server, die falsche Antworten liefern, können zu unerwarteten Fehlern in Anwendungen oder zum DNS-Hijacking führen. Sie sind an unerwarteten Websites, Zertifikatsfehlern oder mit DNS-Prüfsoftware zu erkennen. Gilt sowohl für die Konfiguration des eigenen Servers, als auch für die verwendeten DNS Upstream Server.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d3856d40-5869-4b06-812b-4cc966f96d80 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | d3856d40-5869-4b06-812b-4cc966f96d80 |
