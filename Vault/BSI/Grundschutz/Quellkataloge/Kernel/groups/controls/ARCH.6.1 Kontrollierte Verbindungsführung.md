---
tags: arch61-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.6.1 Kontrollierte Verbindungsführung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.6.1 - Kontrollierte Verbindungsführung
Gruppe: [ARCH.6 Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md) *** | Externe Netzanschlüsse | KANN | eine  {{physisch oder logisch}} kontrollierte Verbindungsführung | für Weitverkehrsverbindungen | aktivieren | IT-Betriebskonzept | >Architektur für Externe Netzanschlüsse KANN eine  {{ insert: param, arch.6.1-prm1 }} kontrollierte Verbindungsführung für Weitverkehrsverbindungen aktivieren.

> [!info]- Guidance
>Unter einer physisch kontrollierten Verbindungsführung kann in diesem Kontext die Verwendung dedizierter Leitungswege (Dark Fiber), sowie Hardware-Komponenten wie Router, Firewalls oder Trennstellen verstanden werden, die den Zugriff auf Leitungen oder Ports unmittelbar begrenzen. Eine logisch kontrollierte Verbindungsführung kann durch softwarebasierte Mechanismen wie VLANs, VPN-Tunnel oder Routing-Regeln erfolgen, die den Datenverkehr unabhängig von der physischen Leitung steuern. Ohne eine kontrollierte Verbindungsführung könnte ein Angreifer über eine ungeschützte oder direkt angebundene Leitung in interne Systeme eindringen und dort Schadsoftware platzieren, Daten manipulieren oder vertrauliche Informationen abziehen. Ebenso könnte durch eine unzureichend kontrollierte Verbindung ein Ausfall der Netzstabilität eintreten, etwa wenn über eine falsch konfigurierte Schnittstelle großflächiger Datenverkehr einbricht und produktive Systeme beeinträchtigt. Eine kontrollierte Architektur kann dagegen Angriffsflächen reduzieren, Datenströme nachvollziehbar machen und die Sicherheit der Informationsflüsse zwischen Institution und externen Partnern oder Netzanbietern erhöhen. Die Umsetzung kann beispielsweise durch klar definierte Übergabepunkte zum externen Netz erfolgen, an denen sämtliche eingehenden und ausgehenden Verbindungen zentral zusammenlaufen und durch Filter- oder Segmentierungsmechanismen geprüft werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | acd884af-7aad-470c-bfcf-216cff90e9be |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | acd884af-7aad-470c-bfcf-216cff90e9be |
