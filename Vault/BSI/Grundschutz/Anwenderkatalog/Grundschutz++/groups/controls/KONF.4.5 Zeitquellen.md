---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.5 Zeitquellen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.5 - Zeitquellen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *** | IT-Systeme | SOLLTE | Zeitquellen |  | autorisieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE Zeitquellen autorisieren.

> [!info]- Guidance
>Eine einheitliche Zeitquelle für die Systemuhr (meist über NTP oder PTP) ist essenziell für die einheitliche Auswertung von Logdateien, sowie für moderne kryptographische Verfahren. Es empfiehlt sich zu definieren, welche NTP-Server von welchen NTP-Clients genutzt werden sollen und ob NTP-Server im Broadcast-Modus oder im Client-Server-Modus arbeiten. Letzteres (Client-Server) ist hierbei Best Practice. In bestimmten Fällen empfiehlt es sich außerdem, dass sich NTP-Server bei der Kommunikation gegenüber Clients authentisieren und demnach NTP-Clients nur authentifizierte NTP-Daten akzeptieren.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 92eee157-2b9b-4a80-8f17-4b124590d72f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 92eee157-2b9b-4a80-8f17-4b124590d72f |
