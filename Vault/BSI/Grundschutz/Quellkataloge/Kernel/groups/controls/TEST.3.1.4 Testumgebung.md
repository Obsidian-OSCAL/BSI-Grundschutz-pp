---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.4 Testumgebung
parent_control: TEST.3.1 Sicherheitstest
stmt_modal_verb: SOLLTE
stmt_action_word: installieren
stmt_documentation: IT-Betriebskonzept
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.4 - Testumgebung
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Änderungen und Tests (TEST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST%20Änderungen%20und%20Tests.md)*<br> *  &rarr; [Tests](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.3%20Tests.md) *</div> | [Änderungen und Tests](practices_Änderungen und Tests_554ba2da-7317-4792-8548-141250039260) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine dedizierte Testumgebung |  | [installieren](action_words_installieren_8e432bcd-2e41-444d-98d4-c4dbbdc9e575) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Änderungen und Tests SOLLTE eine dedizierte Testumgebung installieren.</span>

> [!info]- Guidance
>Eine dedizierte Testumgebung (auch Entwicklungsumgebung oder Laborumgebung genannt) ist hier eine von der Produktionsumgebung unabhängige Infrastruktur, die speziell für die Durchführung von Änderungen, Prüfungen und Qualitätssicherungsmaßnahmen vorgesehen ist. Sie dient dazu, geplante Anpassungen, Updates oder Neuentwicklungen realistisch nachzustellen, ohne die Verfügbarkeit oder Integrität der produktiven Systeme und Daten zu gefährden. Zur Produktivumgebung zählen dabei auch Betriebssysteme, verwendete Datenbanken und Netzschnittstellen. Dediziert bedeutet in diesem Zusammenhang, dass Ressourcen – beispielsweise Server, Datenbanken, Netzsegmente oder virtuelle Umgebungen – ausschließlich für Testzwecke bereitgestellt werden und nicht gleichzeitig produktiven Aufgaben dienen. Der Zweck dieser Vorgabe liegt darin, unbeabsichtigte Auswirkungen von Änderungen auf laufende Systeme zu vermeiden. Ohne eine solche Testumgebung könnte ein fehlerhaftes Update unmittelbar zu Produktionsausfällen führen oder sensible Daten unbeabsichtigt preisgeben. Eine Trennung kann dagegen sicherstellen, dass Schwachstellen oder Inkompatibilitäten frühzeitig erkannt werden, wodurch die Stabilität und Sicherheit der produktiven Systeme erhalten bleiben. Zur Umsetzung kann eine Institution verschiedene Maßnahmen einsetzen: (1) Sie kann separate physische oder virtuelle Serverlandschaften bereitstellen, die die Produktionsumgebung realitätsnah abbilden. (2) Sie kann Testdatenbanken mit anonymisierten oder synthetisch generierten Daten nutzen, um Datenschutzrisiken zu vermeiden. (3) Sie kann durch ein definiertes Deployment-Verfahren sicherstellen, dass Änderungen zunächst automatisiert in die Testumgebung ausgerollt und dort validiert werden, bevor eine Freigabe für die Produktion erfolgt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 9c86f2de-9a7a-4fff-b833-7e596fdb32a8 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 9c86f2de-9a7a-4fff-b833-7e596fdb32a8 |

> [!info]- Links> > related: [ARCH.7.3 Entwicklungs- und Testumgebungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.7.3%20Entwicklungs-%20und%20Testumgebungen.md)> > related: [ARCH.2.2.8 Segmentierung von Test und Betrieb](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2.8%20Segmentierung%20von%20Test%20und%20Betrieb.md)
