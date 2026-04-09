---
tags: arch5110-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.10 Webfilterung
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.10 - Webfilterung
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
> [!info]- Untergeordnete Controls
> [ARCH.5.1.10.1 Bekannte schädliche Inhalte](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1.10.1%20Bekannte%20schädliche%20Inhalte.md)> [ARCH.5.1.10.2 Bekannte illegale Inhalte](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1.10.2%20Bekannte%20illegale%20Inhalte.md)> [ARCH.5.1.10.3 Speicherdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1.10.3%20Speicherdienste.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *** | Externe Netzanschlüsse | SOLLTE | den Zugriff auf Webinhalte | anhand von {{Kriterien}} | einschränken | Firewallregeln | >Architektur für Externe Netzanschlüsse SOLLTE den Zugriff auf Webinhalte anhand von {{ insert: param, arch.5.1.10-prm1 }} einschränken.

> [!info]- Guidance
>Das World Wide Web ist für zahlreiche Geschäftsprozesse essenziell. Andererseits wird das Web von Angreifern auch für die Verbreitung von illegalen Inhalten, Schadprogrammen oder Phishing verwendet. Durch unkontrollierten Webzugriff könnten etwa Schadcode, Phishing oder Datenabfluss in die Institution gelangen. Kriterien meint hier die festgelegten Maßstäbe, nach denen externe Verbindungen zu Webinhalten gefiltert oder eingeschränkt werden. Im Fachjargon spricht man von filtering criteria oder access control policies. Solche Kriterien können beispielsweise Inhaltskategorien (z. B. Glücksspiel, soziale Netzwerke, Streaming), Reputationsbewertungen von Domains (z. B. „malicious“ oder „suspicious“ laut Threat-Intelligence-Feeds), oder technische Eigenschaften (z. B. bekannte IP-Ranges, Länderzugehörigkeit, verwendete Protokolle/Ports, Signaturen) sein. Sinnvoll ist eine Kombination verschiedener Kriterien. Die Anforderung kann über Filterung im Browser, auf Systemen oder an Netzgrenzen umgesetzt werden (z.B. durch Firewalls, Sicherheitsproxies oder VPN-Gateways).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 327ca27d-e60f-47d1-8840-5bcb09340030 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 327ca27d-e60f-47d1-8840-5bcb09340030 |

> [!info]- Links> > related: [KONF.12.1.7 Filtern schädlicher Webinhalte](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.12.1.7%20Filtern%20schädlicher%20Webinhalte.md)
