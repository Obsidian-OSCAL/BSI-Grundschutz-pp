---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.8.1 Einschränkung von Zonentransfers
parent_control: KONF.11.8 Einschränkung von Schnittstellen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.8.1 - Einschränkung von Zonentransfers
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.11%20Vertrauensbeziehungen.md)
---

** Übergeordnetes Control: ** [KONF.11.8 Einschränkung von Schnittstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.11.8%20Einschränkung%20von%20Schnittstellen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.11%20Vertrauensbeziehungen.md) *** | DNS-Server | SOLLTE | Zonentransfers |  | einschränken | Konfigurationshistorie | >Konfiguration für DNS-Server SOLLTE Zonentransfers einschränken.

> [!info]- Guidance
>Zum Schutz vor DNS-Reconnaissance und DNS-Spoofing, da Zonendaten alle DNS-Einträger einer Domäne enthalten. Kann durch Einschränkung auf autorisierte IP-Adressen und TSIG umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | cf0655b0-3c6a-48a5-8f29-4445c26c3659 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | cf0655b0-3c6a-48a5-8f29-4445c26c3659 |
