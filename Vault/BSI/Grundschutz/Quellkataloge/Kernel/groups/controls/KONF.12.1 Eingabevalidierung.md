---
tags:
- Produktbeschreibung
- konf121-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1 - Eingabevalidierung
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

> [!info]- Untergeordnete Controls
> [KONF.12.1.1 Zertifikatsprüfung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.1%20Zertifikatsprüfung.md)> [KONF.12.1.2 Content Security Policy (CSP)](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.2%20Content%20Security%20Policy%20(CSP).md)> [KONF.12.1.3 Same-Origin-Policy](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.3%20Same-Origin-Policy.md)> [KONF.12.1.4 Subresource Integrity-Prüfung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.4%20Subresource%20Integrity-Prüfung.md)> [KONF.12.1.5 HTTP Strict Transport Security (HSTS)](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.5%20HTTP%20Strict%20Transport%20Security%20(HSTS).md)> [KONF.12.1.6 JavaScript](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.6%20JavaScript.md)> [KONF.12.1.7 Filtern schädlicher Webinhalte](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.7%20Filtern%20schädlicher%20Webinhalte.md)> [KONF.12.1.8 Duplikate im Verzeichnisbaum](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.8%20Duplikate%20im%20Verzeichnisbaum.md)> [KONF.12.1.9 Journaling](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.9%20Journaling.md)> [KONF.12.1.10 HTTP-Response-Header](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.10%20HTTP-Response-Header.md)> [KONF.12.1.11 Aktive Dateiinhalte](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.11%20Aktive%20Dateiinhalte.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Anwendungen | SOLLTE | die Validierung von Eingabedaten | durch {{einen automatisierten Mechanismus}} | aktivieren | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE die Validierung von Eingabedaten durch {{ insert: param, konf.12.1-prm1 }} aktivieren.

> [!info]- Guidance
>Eingabevalidierung (engl. input validation) ist die technische und logische Überprüfung von Daten, die von Nutzenden, Schnittstellen oder externen Quellen an eine Anwendung übergeben werden. Ziel ist es, sicherzustellen, dass nur erwartete, syntaktisch und semantisch korrekte Eingaben verarbeitet werden – beispielsweise Zahlen in einem numerischen Feld, zulässige Dateiformate bei Uploads oder inhaltlich beschränkte Steuerzeichen in Formularen. Fehlende oder unzureichende Eingabevalidierung könnte es Angreifenden ermöglichen, schadhaften Code einzuschleusen (injection attacks wie SQL Injection oder Command Injection), Geschäftslogik zu manipulieren oder Systeme über Ressourcenmissbrauch lahmzulegen. Eine saubere Validierung kann dagegen die Angriffsfläche deutlich reduzieren und die Verlässlichkeit der Anwendung erhöhen. Dabei hängt die Ausgestaltung stark vom Einsatzzweck ab: Während etwa bei einer Textverarbeitung größere Freiheiten gewährt werden können, erfordern sensible Szenarien wie SQL-Injection bei Datenbankanfragen, die Abwehr von prompt injection bei Large Language Models (LLM) oder die Verarbeitung von Zahlungsdaten sehr strikte Prüfungen. Je nach Anwendung und Risikoprofil können Plausibilitätsprüfungen, die Beschränkung der Eingabedaten auf vordefinierte Werte, Verifikationen der Daten bei einer dritten Stelle (z.B. eines Zahlungsmittels beim Zahlungsanbieter), Regular Expression Entry Patterns, oder Data Escaping als Maßnahmen sinnvoll sein.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4cf4ca7f-0b09-4777-83dc-5569c8e08f63 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4cf4ca7f-0b09-4777-83dc-5569c8e08f63 |

> [!info]- Links> > related: [DEV.2.6.1 Eingabevalidierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DEV.2.6.1%20Eingabevalidierung.md)
