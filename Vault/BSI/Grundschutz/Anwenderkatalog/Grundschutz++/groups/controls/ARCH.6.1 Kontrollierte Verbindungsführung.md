---
tags:
- arch61-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.6.1 Kontrollierte Verbindungsführung
stmt_target_object_category: Externe Netzanschlüsse
stmt_modal_verb: KANN
stmt_action_word: aktivieren
stmt_documentation: IT-Betriebskonzept
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.6.1 - Kontrollierte Verbindungsführung
Gruppe: [ARCH.6 Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Vertraulichkeit und Integrität im Weitverkehrsnetz](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.6%20Vertraulichkeit%20und%20Integrität%20im%20Weitverkehrsnetz.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Externe Netzanschlüsse](target_object_categories_Externe_Netzanschlüsse_a9521914-ccf9-4c20-8eef-2dd912fb815d) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | eine  {{physisch oder logisch}} kontrollierte Verbindungsführung | für Weitverkehrsverbindungen | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Externe Netzanschlüsse KANN eine  {{ insert: param, arch.6.1-prm1 }} kontrollierte Verbindungsführung für Weitverkehrsverbindungen aktivieren.</span>

> [!info]- Guidance
>Unter einer physisch kontrollierten Verbindungsführung kann in diesem Kontext die Verwendung dedizierter Leitungswege (Dark Fiber), sowie Hardware-Komponenten wie Router, Firewalls oder Trennstellen verstanden werden, die den Zugriff auf Leitungen oder Ports unmittelbar begrenzen. Eine logisch kontrollierte Verbindungsführung kann durch softwarebasierte Mechanismen wie VLANs, VPN-Tunnel oder Routing-Regeln erfolgen, die den Datenverkehr unabhängig von der physischen Leitung steuern. Ohne eine kontrollierte Verbindungsführung könnte ein Angreifer über eine ungeschützte oder direkt angebundene Leitung in interne Systeme eindringen und dort Schadsoftware platzieren, Daten manipulieren oder vertrauliche Informationen abziehen. Ebenso könnte durch eine unzureichend kontrollierte Verbindung ein Ausfall der Netzstabilität eintreten, etwa wenn über eine falsch konfigurierte Schnittstelle großflächiger Datenverkehr einbricht und produktive Systeme beeinträchtigt. Eine kontrollierte Architektur kann dagegen Angriffsflächen reduzieren, Datenströme nachvollziehbar machen und die Sicherheit der Informationsflüsse zwischen Institution und externen Partnern oder Netzanbietern erhöhen. Die Umsetzung kann beispielsweise durch klar definierte Übergabepunkte zum externen Netz erfolgen, an denen sämtliche eingehenden und ausgehenden Verbindungen zentral zusammenlaufen und durch Filter- oder Segmentierungsmechanismen geprüft werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | acd884af-7aad-470c-bfcf-216cff90e9be |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | acd884af-7aad-470c-bfcf-216cff90e9be |
